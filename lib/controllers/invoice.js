import merge from 'lodash/merge'
import { GET, POST } from 'constants/http-methods'

class Invoice {
  constructor (sdk) {
    this.sdk = sdk
  }

  get (invoiceId, callback) {
    return this.sdk.apiClient.call({
      method: GET,
      path: `/veem/v1.1/invoices/${invoiceId}`,
    }, callback)
  }

  list (callback) {
    return this.sdk.apiClient.call({
      method: GET,
      path: '/veem/v1.1/invoices',
    }, callback)
  }

  draft (invoice, callback) {
    const computedInvoice = merge({}, invoice, { approveAutomatically: false })

    return this._create(computedInvoice, callback)
  }

  send (invoice, callback) {
    const computedInvoice = merge({}, invoice, { approveAutomatically: true })

    return this._create(computedInvoice, callback)
  }

  sendById (invoiceId, callback) {
    return this.sdk.apiClient.call({
      method: POST,
      path: `/veem/v1.1/invoices/${invoiceId}/approve`,
    }, callback)
  }

  cancel (invoiceId, callback) {
    return this.sdk.apiClient.call({
      method: POST,
      path: `/veem/v1.1/invoices/${invoiceId}/cancel`,
    }, callback)
  }

  _create (invoice, callback) {
    return this.sdk.apiClient.call({
      method: POST,
      path: '/veem/v1.1/invoices',
      payload: invoice,
    }, callback)
  }
}

export default Invoice
