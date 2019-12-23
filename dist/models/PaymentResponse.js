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

var _Payee = _interopRequireDefault(require("./Payee"));

var _ExchangeRate = _interopRequireDefault(require("./ExchangeRate"));

var PaymentResponse =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(PaymentResponse, _Schema);

  function PaymentResponse() {
    (0, _classCallCheck2["default"])(this, PaymentResponse);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PaymentResponse).apply(this, arguments));
  }

  return PaymentResponse;
}(_Schema2["default"]);

PaymentResponse.schema = {
  title: 'PaymentResponse',
  type: 'object',
  properties: {
    requestId: {
      type: 'string'
    },
    amount: {
      type: 'object',
      properties: _MonetaryAmount["default"].schema.properties
    },
    attachments: {
      type: 'object',
      properties: _Attachment["default"].response.schema.properties
    },
    batchItemId: {
      type: 'number'
    },
    claimLink: {
      type: 'string'
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
    paymentApproval: {
      type: 'object',
      properties: {
        approvalStatus: {
          type: 'string'
        },
        approverNumber: {
          type: 'number'
        },
        approverNumberRequired: {
          type: 'number'
        },
        userApprovalList: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              approvalStatus: {
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
              middleName: {
                type: 'string'
              }
            }
          }
        }
      }
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
    pushPaymentInfo: {
      amount: {
        type: 'obect',
        properties: _MonetaryAmount["default"].schema.properties
      },
      pushPaymentInfo: {
        type: 'string',
        reference: 'string'
      }
    },
    status: {
      type: 'string'
    },
    timeCreated: {
      type: 'string'
    },
    timeUpdated: {
      type: 'string'
    }
  }
};
var _default = PaymentResponse;
exports["default"] = _default;