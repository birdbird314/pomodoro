#!/bin/bash

rm -r docs/*
cp *.html docs/
cp -r css docs/
cp -r js/src docs/
rm docs/*/*Mock*
echo "INFO: Done"
