import { GET } from 'constants/http-methods'

class Metadata {
  constructor (apiClient) {
    this.apiClient = apiClient
  }

  getCountryCurrencyMap (callback) {
    return this.apiClient.call({
      method: GET,
      path: '/veem/public/v1.1/country-currency-map',
    }, callback)
  }

  getErrorCodes (callback) {
    return this.apiClient.call({
      method: GET,
      path: '/veem/public/v1.1/errorcodes',
    }, callback)
  }
}

export default Metadata
