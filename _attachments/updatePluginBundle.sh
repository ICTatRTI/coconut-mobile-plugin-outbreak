#!/bin/bash
cat Person.coffee | coffee --bare --compile --stdio > /tmp/plugins.js; cat node_modules/moment/min/moment.min.js node_modules/underscore/underscore-min.js /tmp/plugins.js > plugin-bundle.js
