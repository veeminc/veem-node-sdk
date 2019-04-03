import Schema from './Schema'
import MonetaryAmount from './MonetaryAmount'
import Attachment from './Attachment'
import Payee from './Payee'
import ExchangeRate from './ExchangeRate'

class PaymentResponse extends Schema {}

PaymentResponse.schema = {
  title: 'PaymentResponse',
  type: 'object',
  properties: {
    requestId: {
      type: 'string',
    },
    amount: {
      type: 'object',
      properties: MonetaryAmount.schema.properties,
    },
    attachments: {
      type: 'object',
      properties: Attachment.response.schema.properties,
    },
    batchItemId: {
      type: 'number',
    },
    claimLink: {
      type: 'string',
    },
    ccEmails: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    clientId: {
      type: 'string',
    },
    dueDate: {
      type: 'string',
    },
    exchangeRate: {
      type: 'object',
      properties: ExchangeRate.response.schema.properties,
    },
    exchangeRateQuoteId: {
      type: 'string',
    },
    externalInvoiceRefId: {
      type: 'string',
    },
    id: {
      type: 'number',
    },
    notes: {
      type: 'string',
    },
    payee: {
      type: 'object',
      properties: Payee.schema.properties,
    },
    payeeAmount: {
      type: 'object',
      properties: MonetaryAmount.schema.properties,
    },
    paymentAction: {
      type: 'string',
    },
    paymentApproval: {
      type: 'object',
      properties: {
        approvalStatus: {
          type: 'string',
        },
        approverNumber: {
          type: 'number',
        },
        approverNumberRequired: {
          type: 'number',
        },
        userApprovalList: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              approvalStatus: {
                type: 'string',
              },
              email: {
                type: 'string',
              },
              firstName: {
                type: 'string',
              },
              lastName: {
                type: 'string',
              },
              middleName: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    paymentApprovalRequest: {
      accountId: {
        type: 'number',
      },
      userId: {
        type: 'number',
      },
    },
    purposeOfPayment: {
      type: 'string',
    },
    pushPaymentInfo: {
      amount: {
        type: 'obect',
        properties: MonetaryAmount.schema.properties,
      },
      pushPaymentInfo: {
        type: 'string',
        reference: 'string',
      },
    },
    status: {
      type: 'string',
    },
    timeCreated: {
      type: 'string',
    },
    timeUpdated: {
      type: 'string',
    },
  },
}

export default PaymentResponse
