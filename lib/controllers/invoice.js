import merge from 'lodash/merge'
import get from 'lodash/get'
import set from 'lodash/set'
import cloneDeep from 'lodash/cloneDeep'
import Promise from 'bluebird'
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

  async _create (invoice, callback) {
    const computedInvoice = cloneDeep(invoice)

    const attachments = get(invoice, 'attachments', [])
    const uploadedAttachments = await Promise.map(attachments, attachment => this.sdk.attachment.upload(attachment))

    set(computedInvoice, 'attachments', uploadedAttachments)

    return this.sdk.apiClient.call({
      method: POST,
      path: '/veem/v1.1/invoices',
      payload: computedInvoice,
    }, callback)
  }
}

export default Invoice
