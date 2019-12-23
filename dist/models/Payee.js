"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Payee = function Payee(data) {
  (0, _classCallCheck2["default"])(this, Payee);
  this.data = data;
  this.schema = Payee.schema;
};

Payee.schema = {
  title: 'Payee',
  type: 'object',
  properties: {
    businessName: {
      type: 'string'
    },
    countryCode: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    type: {
      type: 'string',
      "enum": ['Incomplete', 'Business', 'Personal']
    },
    phone: {
      type: 'string'
    }
  }
};
var _default = Payee;
exports["default"] = _default;