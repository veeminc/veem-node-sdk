"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _trim = _interopRequireDefault(require("lodash/trim"));

function buildUrl(base, path) {
  var cleanedPath = (0, _trim["default"])(path, '/');
  var url = "https://".concat(base, "/").concat(cleanedPath);
  return url;
}

module.exports = buildUrl;