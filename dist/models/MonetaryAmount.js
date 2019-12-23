"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var MonetaryAmount = function MonetaryAmount(data) {
  (0, _classCallCheck2["default"])(this, MonetaryAmount);
  this.data = data;
  this.schema = MonetaryAmount.schema;
};

MonetaryAmount.schema = {
  title: 'MonetaryAmount',
  type: 'object',
  properties: {
    currency: {
      type: 'string'
    },
    amount: {
      type: 'number'
    }
  }
};
var _default = MonetaryAmount;
exports["default"] = _default;