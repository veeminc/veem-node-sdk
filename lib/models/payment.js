import MonetaryAmount from './monetary-amount'
import Payee from './payee'
import filter from 'uber-json-schema-filter'

class Payment {
  constructor (data) {
    this.data = data
    this.schema = Payment.schema
  }

  request () {
    return filter(this.schema, this.data)
  }
}

Payment.schema = {
  title: 'Payment',
  type: 'object',
  properties: {
    amount: {
      type: 'object',
      properties: MonetaryAmount.schema.properties,
    },
    payee: {
      type: 'object',
      properties: Payee.schema.properties,
    },
    approveAutomatically: {
      type: 'boolean',
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

export default Payment
