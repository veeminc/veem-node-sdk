import { GET } from 'constants/http-methods'

class Customer {
  constructor (apiClient) {
    this.apiClient = apiClient
  }

  list (email, callback) {
    const queries = {
      email,
    }

    return this.apiClient.call({
      method: GET,
      path: '/veem/v1.1/customers',
      queries,
    }, callback)
  }
}

export default Customer
