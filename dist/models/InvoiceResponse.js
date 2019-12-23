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

var _MonetaryAmount = _interopRequireDefault(require("./MonetaryAmount"));

var _Attachment = _interopRequireDefault(require("./Attachment"));

var _Payer = _interopRequireDefault(require("./Payer"));

var _ExchangeRate = _interopRequireDefault(require("./ExchangeRate"));

var InvoiceResponse =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(InvoiceResponse, _Schema);

  function InvoiceResponse() {
    (0, _classCallCheck2["default"])(this, InvoiceResponse);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InvoiceResponse).apply(this, arguments));
  }

  return InvoiceResponse;
}(_Schema2["default"]);

InvoiceResponse.schema = {
  title: 'InvoiceResponse',
  type: 'object',
  properties: {
    amount: {
      type: 'object',
      properties: _MonetaryAmount["default"].schema.properties
    },
    attachments: {
      type: 'object',
      properties: _Attachment["default"].response.schema.properties
    },
    ccEmails: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    claimLink: {
      type: 'string'
    },
    clientId: {
      type: 'string'
    },
    dueDate: {
      type: 'string'
    },
    exchangeRate: {
      type: 'object',
      properties: _ExchangeRate["default"].response.schema.properties
    },
    exchangeRateQuoteId: {
      type: 'string'
    },
    externalInvoiceRefId: {
      type: 'string'
    },
    id: {
      type: 'number'
    },
    notes: {
      type: 'string'
    },
    payer: {
      type: 'object',
      properties: _Payer["default"].schema.properties
    },
    purposeOfPayment: {
      type: 'string'
    },
    status: {
      type: 'string'
    },
    timeCreated: {
      type: 'string'
    }
  }
};
var _default = InvoiceResponse;
exports["default"] = _default;