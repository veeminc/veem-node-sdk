var MonetaryAmount = require('./monetary-amount')
var Payer = require('./payer')
var filter = require('uber-json-schema-filter')

function Invoice(data) {
  this.data = data
}

Invoice.prototype.schema = {
  title: 'Invoice',
  type: 'object',
  properties: {
    approveAutomatically: {
      type: 'boolean',
    },
    amount: {
      type: 'object',
      properties: MonetaryAmount.prototype.schema.properties,
    },
    payer: {
      type: 'object',
      properties: Payer.prototype.schema.properties,
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

Invoice.prototype.request = function () {
  return filter(this.schema, this.data)
}

module.exports = Invoice
