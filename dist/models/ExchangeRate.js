"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _ExchangeRateRequest = _interopRequireDefault(require("./ExchangeRateRequest"));

var _ExchangeRateResponse = _interopRequireDefault(require("./ExchangeRateResponse"));

var ExchangeRate = function ExchangeRate() {
  (0, _classCallCheck2["default"])(this, ExchangeRate);
};

ExchangeRate.request = _ExchangeRateRequest["default"];
ExchangeRate.response = _ExchangeRateResponse["default"];
var _default = ExchangeRate;
exports["default"] = _default;