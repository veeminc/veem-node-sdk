import isArray from 'lodash/isArray'
import { POST } from 'constants/http-methods'

class ExchangeRate {
  constructor (apiClient) {
    this.apiClient = apiClient
  }

  quote (quotes, callback) {
    const isBatch = isArray(quotes)

    const path = isBatch
      ? '/veem/v1.1/exchangerates/quotes/batch'
      : '/veem/v1.1/exchangerates/quotes'

    return this.apiClient.call({
      method: POST,
      path,
      payload: quotes,
    }, callback)
  }
}

export default ExchangeRate
