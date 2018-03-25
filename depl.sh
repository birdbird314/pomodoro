#!/bin/bash

rm -r docs/*
cp *.html docs/
cp -r css docs/
cp -r js/src docs/
echo "INFO: Done"

