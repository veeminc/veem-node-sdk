import { GET } from 'constants/http-methods'

class Metadata {
  constructor (sdk) {
    this.sdk = sdk
  }

  getCountryCurrencyMap (callback) {
    return this.sdk.apiClient.call({
      method: GET,
      path: '/veem/public/v1.1/country-currency-map',
    }, callback)
  }

  getErrorCodes (callback) {
    return this.sdk.apiClient.call({
      method: GET,
      path: '/veem/public/v1.1/errorcodes',
    }, callback)
  }
}

export default Metadata
