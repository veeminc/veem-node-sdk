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
}

export default Metadata
