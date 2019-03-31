import Schema from './schema'

class ExchangeRateResponse extends Schema {}

ExchangeRateResponse.schema = {
  title: 'ExchangeRateResponse',
  type: 'object',
  properties: {
    expiry: {
      type: 'number',
    },
    fromAmount: {
      type: 'number',
    },
    fromCurrency: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    rate: {
      type: 'number?',
    },
    timeCreated: {
      type: 'string?',
    },
    toAmount: {
      type: 'number',
    },
    toCurrency: {
      type: 'string',
    },
  },
}

export default ExchangeRateResponse
