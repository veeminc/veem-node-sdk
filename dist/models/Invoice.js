"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _InvoiceRequest = _interopRequireDefault(require("./InvoiceRequest"));

var _InvoiceResponse = _interopRequireDefault(require("./InvoiceResponse"));

var Invoice = function Invoice() {
  (0, _classCallCheck2["default"])(this, Invoice);
};

Invoice.request = _InvoiceRequest["default"];
Invoice.response = _InvoiceResponse["default"];
var _default = Invoice;
exports["default"] = _default;