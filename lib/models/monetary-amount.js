class MonetaryAmount {
  constructor (data) {
    this.data = data
    this.schema = MonetaryAmount.schema
  }
}

MonetaryAmount.schema = {
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

export default MonetaryAmount
