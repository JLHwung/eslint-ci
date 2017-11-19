#!/usr/bin/env node
"use strict";

var ciJobNumber = require("ci-job-number");

if (ciJobNumber() === 1) {
  require("eslint/bin/eslint");
} else {
  //eslint-disable-next-line no-console
  console.warn("To speed up CI ESLint runs only in first job");
}
