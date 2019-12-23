"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENVIRONMENTS_CONFIG = exports.PRODUCTION = exports.SANDBOX = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ENVIRONMENTS_CONFIG;

var SANDBOX = 'sandbox';
exports.SANDBOX = SANDBOX;
var PRODUCTION = 'production';
exports.PRODUCTION = PRODUCTION;
var ENVIRONMENTS_CONFIG = (_ENVIRONMENTS_CONFIG = {}, (0, _defineProperty2["default"])(_ENVIRONMENTS_CONFIG, SANDBOX, {
  basePath: 'sandbox-api.veem.com'
}), (0, _defineProperty2["default"])(_ENVIRONMENTS_CONFIG, PRODUCTION, {
  basePath: 'api.veem.com'
}), _ENVIRONMENTS_CONFIG);
exports.ENVIRONMENTS_CONFIG = ENVIRONMENTS_CONFIG;