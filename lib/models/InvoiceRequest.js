import Schema from './Schema'
import Attachment from './Attachment'
import ExchangeRate from './ExchangeRate'
import MonetaryAmount from './MonetaryAmount'
import Payer from './Payer'

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
