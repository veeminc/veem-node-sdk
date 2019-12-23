"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _Schema2 = _interopRequireDefault(require("./Schema"));

var CustomerResponse =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(CustomerResponse, _Schema);

  function CustomerResponse() {
    (0, _classCallCheck2["default"])(this, CustomerResponse);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CustomerResponse).apply(this, arguments));
  }

  return CustomerResponse;
}(_Schema2["default"]);

CustomerResponse.schema = {
  title: 'CustomerResponse',
  type: 'object',
  properties: {
    id: {
      type: 'number'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    isoCountryCode: {
      type: 'string'
    },
    isContact: {
      type: 'boolean'
    }
  }
};
var _default = CustomerResponse;
exports["default"] = _default;