#!/usr/bin/env bash
#DEBUG=*,-babel* ./node_modules/.bin/babel-node src/server/index.js

DEBUG=*,-babel* ./node_modules/.bin/babel-watch src/server/index.js --trace-warnings --exclude node_modules

