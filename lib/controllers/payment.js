import merge from 'lodash/merge'
import castArray from 'lodash/castArray'
import map from 'lodash/map'
import first from 'lodash/first'
import isArray from 'lodash/isArray'
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

  draft (paymentOrPayments, callback) {
    const isBatch = isArray(paymentOrPayments)
    const payments = castArray(paymentOrPayments)

    const computedPayments = map(payments, payment => merge({}, payment, { approveAutomatically: false }))
    const computedPaymentOrPayments = isBatch ? computedPayments : first(computedPayments)

    return this._create(computedPaymentOrPayments, callback)
  }

  send (paymentOrPayments, callback) {
    const isBatch = isArray(paymentOrPayments)
    const payments = castArray(paymentOrPayments)

    const computedPayments = map(payments, payment => merge({}, payment, { approveAutomatically: true }))
    const computedPaymentOrPayments = isBatch ? computedPayments : first(computedPayments)

    return this._create(computedPaymentOrPayments, callback)
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

  _create (paymentOrPayments, callback) {
    const isBatch = isArray(paymentOrPayments)

    const path = isBatch
      ? '/veem/v1.1/payments/batch'
      : '/veem/v1.1/payments'

    return this.apiClient.call({
      method: POST,
      path,
      payload: paymentOrPayments,
    }, callback)
  }
}

export default Payment
