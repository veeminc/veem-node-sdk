import Schema from './schema'
import Attachment from './attachment'
import ExchangeRate from './exchange-rate'
import MonetaryAmount from './monetary-amount'
import Payer from './payer'

class InvoiceRequest extends Schema {}

InvoiceRequest.schema = {
  title: 'InvoiceRequest',
  type: 'object',
  properties: {
    amount: {
      type: 'object',
      properties: MonetaryAmount.schema.properties,
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
    payer: {
      type: 'object',
      properties: Payer.schema.properties,
    },
    purposeOfPayment: {
      type: 'string',
    },
  },
}

export default InvoiceRequest
