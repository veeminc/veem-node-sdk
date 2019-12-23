"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _PaymentRequest = _interopRequireDefault(require("./PaymentRequest"));

var _PaymentResponse = _interopRequireDefault(require("./PaymentResponse"));

var Payment = function Payment() {
  (0, _classCallCheck2["default"])(this, Payment);
};

Payment.request = _PaymentRequest["default"];
Payment.response = _PaymentResponse["default"];
var _default = Payment;
exports["default"] = _default;