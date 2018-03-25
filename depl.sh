#!/bin/bash

# Clear docs dir
rm -r docs/*

# Copy html and css files
cp pomodoro.html docs/index.html
cp -r css docs/

# Copy js files
mkdir docs/js
mkdir docs/js/src
cp -r js/src/* docs/js/src/

# Remove mocked scripts
rm docs/*/*Mock*

echo "INFO: Done"
