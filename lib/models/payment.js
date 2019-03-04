var MonetaryAmount = require('./monetary-amount')
var Payee = require('./payee')
var filter = require('uber-json-schema-filter')

function Payment(data) {
  this.data = data
}

Payment.prototype.schema = {
  title: 'Payment',
  type: 'object',
  properties: {
    amount: {
      type: 'object',
      properties: MonetaryAmount.prototype.schema.properties,
    },
    payee: {
      type: 'object',
      properties: Payee.prototype.schema.properties,
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

Payment.prototype.request = function () {
  return filter(this.schema, this.data)
}

module.exports = Payment
