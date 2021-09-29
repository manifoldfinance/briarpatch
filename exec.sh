#!/bin/bash
NODE_ENV=development node --inspect --max-old-space-size=2048 -r esm ./dist/src/index.js shell