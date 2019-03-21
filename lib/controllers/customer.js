import { GET } from 'constants/http-methods'

class Customer {
  constructor (sdk) {
    this.sdk = sdk
  }

  list (email, callback) {
    const queries = {
      email,
    }

    return this.sdk.apiClient.call({
      method: GET,
      path: '/veem/v1.1/customers',
      queries,
    }, callback)
  }
}

export default Customer
