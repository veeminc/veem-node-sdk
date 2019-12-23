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

var ContactResponse =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(ContactResponse, _Schema);

  function ContactResponse() {
    (0, _classCallCheck2["default"])(this, ContactResponse);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ContactResponse).apply(this, arguments));
  }

  return ContactResponse;
}(_Schema2["default"]);

ContactResponse.schema = {
  title: 'ContactResponse',
  type: 'object',
  properties: {
    country: {
      type: 'string'
    },
    countryName: {
      type: 'string'
    },
    sendingCurrencies: {
      type: 'array'
    },
    receivingCurrencies: {
      type: 'array'
    },
    purposeOfPaymentRequired: {
      type: 'boolean'
    },
    invoiceAttachmentRequired: {
      type: 'boolean'
    },
    purposeOfPaymentInfo: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          countryCode: {
            type: 'string'
          },
          purposeCode: {
            type: 'string'
          },
          description: {
            type: 'string'
          }
        }
      }
    }
  }
};
var _default = ContactResponse;
exports["default"] = _default;