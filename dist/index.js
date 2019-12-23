"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _client = _interopRequireDefault(require("./client"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _environments = require("./constants/environments");

var defaultConfiguration = {
  type: 'oauth2',
  accessToken: null,
  environment: _environments.SANDBOX
};

var VeemSDK = function VeemSDK(params) {
  (0, _classCallCheck2["default"])(this, VeemSDK);
  var configuration = (0, _merge["default"])({}, defaultConfiguration, params);
  return new _client["default"](configuration);
};

var _default = VeemSDK;
exports["default"] = _default;