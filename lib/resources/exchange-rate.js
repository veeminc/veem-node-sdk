import { POST } from '../constants/http-methods'

class ExchangeRate {
  constructor (apiClient) {
    this.apiClient = apiClient
  }

  quote (quote, callback) {
    return this.apiClient.call({
      method: POST,
      path: '/veem/v1.1/exchangerates/quotes',
      payload: quote,
    }, callback)
  }
}

export default ExchangeRate
