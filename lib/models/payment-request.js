import Schema from './schema'
import Attachment from './attachment'
import ExchangeRate from './exchange-rate'
import MonetaryAmount from './monetary-amount'
import Payee from './payee'

class PaymentRequest extends Schema {}

PaymentRequest.schema = {
  title: 'PaymentRequest',
  type: 'object',
  properties: {
    amount: {
      type: 'object',
      properties: MonetaryAmount.schema.properties,
    },
    approveAutomatically: {
      type: 'boolean',
    },
    attachments: {
      type: 'object',
      properties: Attachment.schema.properties,
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
      properties: ExchangeRate.schema.properties,
    },
    exchangeRateQuoteId: {
      type: 'string',
    },
    externalInvoiceRefId: {
      type: 'string',
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
    status: {
      type: 'string',
    },
  },
}

export default PaymentRequest
