var uniqueId = require('lodash.uniqueid')
var HTTP_METHODS = require('../constants/http-methods.js')

function Payment (apiClient) {
  this.apiClient = apiClient
}

Payment.prototype.get = function(paymentId, callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.GET,
    path: `/veem/v1.1/payments/${paymentId}`,
  }, callback)
}

Payment.prototype.list = function(callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.GET,
    path: '/veem/v1.1/payments',
  }, callback)
}

Payment.prototype.draft = function(payment, callback) {
  var computedPayment = Object.assign({}, payment, { approveAutomatically: false })

  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: '/veem/v1.1/payments',
    payload: computedPayment,
  }, callback)
}

Payment.prototype.send = function(payment, callback) {
  var computedPayment = Object.assign({}, payment, { approveAutomatically: true })

  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: '/veem/v1.1/payments',
    payload: computedPayment,
  }, callback)
}

Payment.prototype.sendById = function(paymentId, callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: `/veem/v1.1/payments/${paymentId}/approve`,
  }, callback)
}

Payment.prototype.cancel = function(paymentId, callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: `/veem/v1.1/payments/${paymentId}/cancel`,
  }, callback)
}

module.exports = Payment
