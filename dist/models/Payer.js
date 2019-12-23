"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Payer = function Payer(data) {
  (0, _classCallCheck2["default"])(this, Payer);
  this.data = data;
  this.schema = Payer.schema;
};

Payer.schema = {
  title: 'Payer',
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
var _default = Payer;
exports["default"] = _default;