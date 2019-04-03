import isArray from 'lodash/isArray'
import { POST } from 'constants/httpMethods'

class ExchangeRate {
  constructor (sdk) {
    this.sdk = sdk
  }

  quote (quotes, callback) {
    const isBatch = isArray(quotes)

    const path = isBatch
      ? '/veem/v1.1/exchangerates/quotes/batch'
      : '/veem/v1.1/exchangerates/quotes'

    return this.sdk.apiClient.call({
      method: POST,
      path,
      payload: quotes,
    }, callback)
  }
}

export default ExchangeRate
