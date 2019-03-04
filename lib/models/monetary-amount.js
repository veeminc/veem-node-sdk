function MonetaryAmount(data) {
  this.data = data
}

MonetaryAmount.prototype.schema = {
  title: 'MonetaryAmount',
  type: 'Object',
  properties: {
    currency: {
      type: 'string',
    },
    amount: {
      type: 'number',
    },
  },
}

module.exports = MonetaryAmount
