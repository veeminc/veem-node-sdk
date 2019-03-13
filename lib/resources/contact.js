import { GET, POST } from 'constants/http-methods'

class Contact {
  constructor (apiClient) {
    this.apiClient = apiClient
  }

  get (contactId, callback) {
    return this.apiClient.call({
      method: GET,
      path: `/veem/v1.1/contacts/${contactId}`,
    }, callback)
  }

  getBatch (batchId, callback) {
    return this.apiClient.call({
      method: GET,
      path: `/veem/v1.1/contacts/batch/${batchId}`,
    }, callback)
  }

  list (callback) {
    return this.apiClient.call({
      method: GET,
      path: '/veem/v1.1/contacts',
    }, callback)
  }

  create (contact, callback) {
    return this.apiClient.call({
      method: POST,
      path: '/veem/v1.1/contacts',
      payload: contact,
    }, callback)
  }
}

export default Contact
