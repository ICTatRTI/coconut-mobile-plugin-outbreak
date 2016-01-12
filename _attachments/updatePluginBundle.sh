#!/bin/bash
browserify --standalone Person -v -t coffeeify --extension='.coffee' Person.coffee -o plugin-bundle.js
