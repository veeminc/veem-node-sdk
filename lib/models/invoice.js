import MonetaryAmount from './monetary-amount'
import Payer from './payer'
import filter from 'uber-json-schema-filter'

class Invoice {
  constructor (data) {
    this.data = data
    this.schema = Invoice.schema
  }

  request () {
    return filter(this.schema, this.data)
  }
}

Invoice.schema = {
  title: 'Invoice',
  type: 'object',
  properties: {
    approveAutomatically: {
      type: 'boolean',
    },
    amount: {
      type: 'object',
      properties: MonetaryAmount.schema.properties,
    },
    payer: {
      type: 'object',
      properties: Payer.schema.properties,
    },
    ccEmails: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    dueDate: {
      type: 'string',
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
    purposeOfPayment: {
      type: 'string',
      enum: [
        'Goods',
        'Services',
        'Charitable',
        'Other',
      ],
    },
  },
}

export default Invoice
