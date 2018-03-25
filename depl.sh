#!/bin/bash

rm -r docs/*
cp pomodoro.html docs/index.html
cp -r css docs/
cp -r js/src docs/
rm docs/*/*Mock*
echo "INFO: Done"
