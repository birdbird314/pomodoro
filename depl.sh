#!/bin/bash

rm -r docs/*
cp pomodoro.html docs/index.html
cp -r css docs/
mkdir docs/js
cp -r js/src/* docs/js/
rm docs/*/*Mock*
echo "INFO: Done"
