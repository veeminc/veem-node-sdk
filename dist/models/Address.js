"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Address = function Address(data) {
  (0, _classCallCheck2["default"])(this, Address);
  this.data = data;
  this.schema = Address.schema;
};

Address.schema = {
  title: 'Address',
  type: 'object',
  properties: {
    city: {
      type: 'string'
    },
    line1: {
      type: 'string'
    },
    line2: {
      type: 'string'
    },
    postalCode: {
      type: 'string'
    },
    stateProvince: {
      type: 'string'
    }
  }
};
var _default = Address;
exports["default"] = _default;