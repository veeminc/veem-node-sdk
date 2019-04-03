import Schema from './Schema'
import Attachment from './Attachment'
import ExchangeRate from './ExchangeRate'
import MonetaryAmount from './MonetaryAmount'
import Payee from './Payee'

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
      properties: Attachment.request.schema.properties,
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
      properties: ExchangeRate.request.schema.properties,
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
