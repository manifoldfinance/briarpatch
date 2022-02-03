#!/bin/bash
yarn install
yarn run build
echo "Inital Cold Start - Fetching data..."
./run
sleep 1

