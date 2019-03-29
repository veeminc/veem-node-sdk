import filter from 'uber-json-schema-filter'

class ExchangeRate {
  constructor () {
    this.schema = ExchangeRate.schema
  }

  request () {
    return filter(this.schema, this.data)
  }
}

ExchangeRate.schema = {
  title: 'ExchangeRate',
  type: 'object',
  properties: {
    expiry: {
      type: 'string',
    },
    fromAmount: {
      type: 'number',
    },
    fromCurrency: {
      type: 'string',
    },
    id: {
      type: 'number',
    },
    rate: {
      type: 'number',
    },
    timeCreated: {
      type: 'string',
    },
    toAmount: {
      type: 'number',
    },
    toCurrency: {
      type: 'string',
    },
  },
}

export default ExchangeRate
