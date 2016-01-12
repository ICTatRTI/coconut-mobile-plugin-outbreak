_ = require 'underscore'
BaseConverter = require 'base-converter'
Luhn = require 'luhn-mod-n'
LeftPad = require 'underscore.string/lpad'

available_characters_for_ids = "0123456789ACDEFGHJKMNPRTUVWXY"
device_id_length = 4
person_id_length = 3

# Check if Coconut.config.deviceId is defined, if not - attempt to set it

incrementID = (id, length) ->
  idInDecimal = BaseConverter.genericToDec(id,available_characters_for_ids)
  nextIdInDecimal = idInDecimal + 1
  throw "No more IDs left! Tried to increment #{id}" if nextIdInDecimal.length > idInDecimal
  return LeftPad(BaseConverter.decToGeneric(nextIdInDecimal, available_characters_for_ids), length, '0')

_.delay ->
  Coconut.database.get "_local/device_id"
  .catch (error) ->
      uniqueDeviceIdString = "UNIQUE-DEVICE-ID-"
      Coconut.cloudDB = new PouchDB(Coconut.config.cloud_url_with_credentials())
      Coconut.cloudDB.allDocs
        include_docs:false
        startkey: "UNIQUE-DEVICE-ID-\ufff0"
        endkey: "UNIQUE-DEVICE-ID-"
        descending: true
        limit: 1
      .catch (error) -> console.error error
      .then (result) ->

        deviceId = if result.rows.length is 0
          "0000"
        else
          lastAssignedId = result.rows[0].key.substring(uniqueDeviceIdString.length)
          incrementID(lastAssignedId, device_id_length)

        Coconut.cloudDB.put
          _id: "UNIQUE-DEVICE-ID-#{deviceId}"
          createdAt: (new Date).toISOString().replace(/z|t/gi,' ').trim()
        .catch (error) -> console.error error
        .then (result) ->
          Coconut.database.put
            _id: "_local/device_id"
            device_id: deviceId
            createdAt: (new Date).toISOString().replace(/z|t/gi,' ').trim()
          .catch (error) -> console.error error
          .then ->
            Coconut.config.deviceId = deviceId
            console.log "Local device ID created: #{deviceId}"

  .then (result) ->
    Coconut.config.deviceId = result.device_id
, 1000

class Person

  # We have removed B, I, L, O, Q, S, Z because they can easily be mistaken as 8, 1, 1, 0, 0, 5, 2 respectively. If someone is manually entering an ID and puts a B instead of an 8, we can automatically convert it to 8 and then use the checkdigit to increase our confidence that the converted ID is correct.

  # Called by the action_on_change property for each question in the 'Person' Question Set
  Person.onFormChange = ->
    unless Coconut.questionView.result.get("_id")
      Person.getNextId
        success: (nextId) ->
          Coconut.questionView.result.set "_id", nextId

    Person.formSuggesterUpdater()

  Person.getNextId = (options) ->

    deviceId = Coconut.config.deviceId

    "P#{Math.floor(Math.random()*10000)}"
    Coconut.database.allDocs
      # Note that since it's descending the startkey is the last possible ID
      startkey: "P#{deviceId}\ufff0"
      endkey: "P#{deviceId}"
      descending: true
      limit: 1
    .catch (error) -> console.error error
    .then (result) ->
      nextIdToBeUsedForDevice = if result.rows.length is 0
        "000"
      else
        lastIdUsedForDevice = result.rows[0].key.substring(4,8) # Remove check digit
        nextIdToBeUsedForDevice = incrementID(lastIdUsedForDevice, person_id_length)

      nextIdWithoutCheckdigit = "P#{deviceId}#{nextIdToBeUsedForDevice}"

      nextId = nextIdWithoutCheckdigit + Luhn.generateCheckCharacter(nextIdWithoutCheckdigit,available_characters_for_ids)
      options.success(nextId)

  Person.formSuggester = (matches) ->

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

  Person.formSuggesterUpdater= ->
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

      Person.formSuggester(candidates)

    _(currentData).each (value,field) ->
      if value is ""
        finished()
      else
        Coconut.database.query "resultsByQuestionAndField",
          key: [Coconut.questionView.model.get("id"),field]
          include_docs: true
        .catch (error) ->
          console.error error
          console.error element
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

module.exports = Person
