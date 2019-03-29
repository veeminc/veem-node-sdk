import Schema from './schema'
import MonetaryAmount from './monetary-amount'
import Attachment from './attachment'
import Payer from './payer'
import ExchangeRate from './exchange-rate'

class InvoiceResponse extends Schema {}

InvoiceResponse.schema = {
  title: 'InvoiceResponse',
  type: 'object',
  properties: {
    amount: {
      type: 'object',
      properties: MonetaryAmount.schema.properties,
    },
    attachments: {
      type: 'object',
      properties: Attachment.response.schema.properties,
    },
    ccEmails: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    claimLink: {
      type: 'string',
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
    payer: {
      type: 'object',
      properties: Payer.schema.properties,
    },
    purposeOfPayment: {
      type: 'string',
    },
    status: {
      type: 'string',
    },
    timeCreated: {
      type: 'string',
    },
  },
}

export default InvoiceResponse
