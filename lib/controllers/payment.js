import merge from 'lodash/merge'
import { GET, POST } from 'constants/http-methods'

class Payment {
  constructor (apiClient) {
    this.apiClient = apiClient
  }

  get (paymentId, callback) {
    return this.apiClient.call({
      method: GET,
      path: `/veem/v1.1/payments/${paymentId}`,
    }, callback)
  }

  getBatch (batchId, callback) {
    return this.apiClient.call({
      method: GET,
      path: `/veem/v1.1/payments/batch/${batchId}`,
    }, callback)
  }

  list (callback) {
    return this.apiClient.call({
      method: GET,
      path: '/veem/v1.1/payments',
    }, callback)
  }

  draft (payment, callback) {
    const computedPayment = merge({}, payment, { approveAutomatically: false })

    return this.apiClient.call({
      method: POST,
      path: '/veem/v1.1/payments',
      payload: computedPayment,
    }, callback)
  }

  send (payment, callback) {
    const computedPayment = merge({}, payment, { approveAutomatically: true })

    return this.apiClient.call({
      method: POST,
      path: '/veem/v1.1/payments',
      payload: computedPayment,
    }, callback)
  }

  sendById (paymentId, callback) {
    return this.apiClient.call({
      method: POST,
      path: `/veem/v1.1/payments/${paymentId}/approve`,
    }, callback)
  }

  cancel (paymentId, callback) {
    return this.apiClient.call({
      method: POST,
      path: `/veem/v1.1/payments/${paymentId}/cancel`,
    }, callback)
  }
}

export default Payment
