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

var _Attachment = _interopRequireDefault(require("./Attachment"));

var _ExchangeRate = _interopRequireDefault(require("./ExchangeRate"));

var _MonetaryAmount = _interopRequireDefault(require("./MonetaryAmount"));

var _Payer = _interopRequireDefault(require("./Payer"));

var InvoiceRequest =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(InvoiceRequest, _Schema);

  function InvoiceRequest() {
    (0, _classCallCheck2["default"])(this, InvoiceRequest);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InvoiceRequest).apply(this, arguments));
  }

  return InvoiceRequest;
}(_Schema2["default"]);

InvoiceRequest.schema = {
  title: 'InvoiceRequest',
  type: 'object',
  properties: {
    amount: {
      type: 'object',
      properties: _MonetaryAmount["default"].schema.properties
    },
    attachments: {
      type: 'object',
      properties: _Attachment["default"].request.schema.properties
    },
    ccEmails: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    clientId: {
      type: 'string'
    },
    dueDate: {
      type: 'string'
    },
    exchangeRate: {
      type: 'object',
      properties: _ExchangeRate["default"].request.schema.properties
    },
    exchangeRateQuoteId: {
      type: 'string'
    },
    externalInvoiceRefId: {
      type: 'string'
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
    }
  }
};
var _default = InvoiceRequest;
exports["default"] = _default;