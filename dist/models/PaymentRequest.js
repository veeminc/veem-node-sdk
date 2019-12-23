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

var _Payee = _interopRequireDefault(require("./Payee"));

var PaymentRequest =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(PaymentRequest, _Schema);

  function PaymentRequest() {
    (0, _classCallCheck2["default"])(this, PaymentRequest);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PaymentRequest).apply(this, arguments));
  }

  return PaymentRequest;
}(_Schema2["default"]);

PaymentRequest.schema = {
  title: 'PaymentRequest',
  type: 'object',
  properties: {
    amount: {
      type: 'object',
      properties: _MonetaryAmount["default"].schema.properties
    },
    approveAutomatically: {
      type: 'boolean'
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
    payee: {
      type: 'object',
      properties: _Payee["default"].schema.properties
    },
    payeeAmount: {
      type: 'object',
      properties: _MonetaryAmount["default"].schema.properties
    },
    paymentAction: {
      type: 'string'
    },
    paymentApprovalRequest: {
      accountId: {
        type: 'number'
      },
      userId: {
        type: 'number'
      }
    },
    purposeOfPayment: {
      type: 'string'
    },
    status: {
      type: 'string'
    }
  }
};
var _default = PaymentRequest;
exports["default"] = _default;