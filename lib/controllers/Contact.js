import isArray from 'lodash/isArray'
import pick from 'lodash/pick'
import { GET, POST } from 'constants/httpMethods'

class Contact {
  constructor (sdk) {
    this.sdk = sdk
  }

  get (contactId, callback) {
    return this.sdk.apiClient.call({
      method: GET,
      path: `/veem/v1.1/contacts/${contactId}`,
    }, callback)
  }

  getBatch (batchId, callback) {
    return this.sdk.apiClient.call({
      method: GET,
      path: `/veem/v1.1/contacts/batch/${batchId}`,
      queries: {
        includeItems: true,
      },
    }, callback)
  }

  list (options, callback) {
    const queries = pick(options, [
      'email',
      'firstName',
      'lastName',
      'businessName',
      'batchId',
      'batchItemIds',
      'pageNumber',
      'pageSize',
    ])

    return this.sdk.apiClient.call({
      method: GET,
      path: '/veem/v1.1/contacts',
      queries,
    }, callback)
  }

  create (contactOrContacts, callback) {
    const isBatch = isArray(contactOrContacts)

    const path = isBatch
      ? '/veem/v1.1/contacts/batch'
      : '/veem/v1.1/contacts'

    return this.sdk.apiClient.call({
      method: POST,
      path,
      payload: contactOrContacts,
    }, callback)
  }
}

export default Contact
