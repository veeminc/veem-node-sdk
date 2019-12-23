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

var ContactRequest =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(ContactRequest, _Schema);

  function ContactRequest() {
    (0, _classCallCheck2["default"])(this, ContactRequest);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ContactRequest).apply(this, arguments));
  }

  return ContactRequest;
}(_Schema2["default"]);

ContactRequest.schema = {
  title: 'ContactRequest',
  type: 'object',
  properties: {
    batchItemId: {
      type: 'number'
    },
    businessName: {
      type: 'string'
    },
    contactAccountId: {
      type: 'number'
    },
    dialCode: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    firstName: {
      type: 'string'
    },
    id: {
      type: 'number'
    },
    isoCountryCode: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    phoneNumber: {
      type: 'string'
    }
  }
};
var _default = ContactRequest;
exports["default"] = _default;