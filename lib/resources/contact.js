import isArray from 'lodash/isArray'
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

  create (contacts, callback) {
    const isBatch = isArray(contacts)

    const path = isBatch
      ? '/veem/v1.1/contacts/batch'
      : '/veem/v1.1/contacts'

    return this.apiClient.call({
      method: POST,
      path,
      payload: contacts,
    }, callback)
  }
}

export default Contact