import pick from 'lodash/pick'
import { GET } from 'constants/httpMethods'

class Metadata {
  constructor (sdk) {
    this.sdk = sdk
  }

  getCountryCurrencyMap (options, callback) {
    const query = pick(options, [ 'bankFields' ])

    return this.sdk.apiClient.call({
      method: GET,
      path: '/veem/public/v1.1/country-currency-map',
      query,
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
