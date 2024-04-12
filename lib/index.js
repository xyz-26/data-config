/**
 * @fileoverview data-config
 */
"use strict";

const requireIndex = require("requireindex");

module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: {
      plugins: ['data-config'],
      rules: {
        'data-config/no-ppe-tcc-link': ['error'],
      }
    }
  }
};

module.exports.processors = {
};

