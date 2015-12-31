PersonSuggester = (matches) ->

  percent = (number) ->
    "#{Math.floor(number*100)}%"

  $('#content').append "
    <style>
      #personSuggester{
        position:absolute;
        top:40px;
        right:0px;
        width: 150px;
        background-color: white;
      }
      #errorItems{
        color:red;
      }
    </style>

    <div id='personSuggester'>
      <h3>Matches</h3>
        #{
          _(matches).map (match) ->
            "
            <div>
              <button type='button'><a href='#outbreak/edit/result/#{match.doc._id}'>#{match.doc._id}</a></button>
              <div>Match: #{percent match.percentMatch}</div>
              <div>Errors: #{percent match.percentError}</div>
              <div id='errorItems'>
              #{
                _(match.errors).map (error, field) ->
                  "<div>#{field}: #{error.target} => #{error.value}</div>"
                .join ""
              }
              </div>
              <div>Missing:</div>
              <div id='missingItems'>
              #{
                _(match.missingFields).map (field) ->
                  "<div>#{field}: #{match.doc[field]}</div>"
                .join ""
              }
              </div>
            </div>
            "
          .join ""
        }
      <ul>
      </ul>
    </div>
  "

PersonSuggesterUpdater = ->
  minMatchNumber = 3
  maxMissNumber = 3

  currentData =  Coconut.questionView.currentData()

  matches = {}

  finished = _.after _(currentData).size(), ->
    candidates =  _(matches).chain().filter (match, resultId) ->
      _(match.matches).size() >= minMatchNumber and _(match.misses).size() <= maxMissNumber
    .sortBy (match) ->
      # minus sign makes it sort in descending order
      -_(match["matches"]).size()
    .map (match) ->
      match.percentMatch = _(match.matches).size()/_(currentData).size()
      match.percentError = _(match.error).size()/_(currentData).size()
      match
    .value()

    PersonSuggester(candidates)

  _(currentData).each (value,field) ->
    if value is ""
      finished()
    else
      Coconut.database.query "resultsByQuestionAndField",
        key: [Coconut.questionView.model.get("id"),field]
        include_docs: true
      .catch (error) ->
        console.log error
        console.log element
        finished()
      .then (result) ->
        _(result.rows).each (row) ->
          return if row.id is Coconut.questionView.result.id

          missingFields = _(row.doc).chain().keys().difference [
            "_id"
            "_rev"
            "collection"
            "complete"
            "createdAt"
            "lastModifiedAt"
            "question"
            "savedBy"
            "user"
          ]
          .value()

          matches[row.id] = {matches: {}, errors: {}, missing:{},  doc: row.doc} unless matches[row.id]
          if row.value is value
            matches[row.id]["matches"][field] = value
            missingFields = _(missingFields).without field
          else
            if value isnt ""
              matches[row.id]["errors"][field] = {target: value, value: row.value}
              missingFields = _(missingFields).without field

          matches[row.id].missingFields = missingFields
        finished()

