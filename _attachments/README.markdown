This is a coconut plugin. To update the package run the following command:

cat GeoHierarchy.coffee FacilityHierarchy.coffee Case.coffee | coffee --bare --compile --stdio > /tmp/plugins.js; cat node_modules/moment/min/moment.min.js node_modules/underscore/underscore-min.js /tmp/plugins.js > plugin-bundle.js

