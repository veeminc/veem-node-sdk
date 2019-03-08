import merge from 'lodash/merge'
import { GET, POST } from '../constants/http-methods'

class Invoice {
  constructor (apiClient) {
    this.apiClient = apiClient
  }

  get (invoiceId, callback) {
    return this.apiClient.call({
      method: GET,
      path: `/veem/v1.1/invoices/${invoiceId}`,
    }, callback)
  }

  list (callback) {
    return this.apiClient.call({
      method: GET,
      path: '/veem/v1.1/invoices',
    }, callback)
  }

  draft (invoice, callback) {
    const computedInvoice = merge({}, invoice, { approveAutomatically: false })

    return this.apiClient.call({
      method: POST,
      path: '/veem/v1.1/invoices',
      payload: computedInvoice,
    }, callback)
  }

  send (invoice, callback) {
    const computedInvoice = merge({}, invoice, { approveAutomatically: true })

    return this.apiClient.call({
      method: POST,
      path: '/veem/v1.1/invoices',
      payload: computedInvoice,
    }, callback)
  }

  sendById (invoiceId, callback) {
    return this.apiClient.call({
      method: POST,
      path: `/veem/v1.1/invoices/${invoiceId}/approve`,
    }, callback)
  }

  cancel (invoiceId, callback) {
    return this.apiClient.call({
      method: POST,
      path: `/veem/v1.1/invoices/${invoiceId}/cancel`,
    }, callback)
  }
}

export default Invoice
