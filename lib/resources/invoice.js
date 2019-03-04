var uniqueId = require('lodash.uniqueid')
var HTTP_METHODS = require('../constants/http-methods.js')

function Invoice (apiClient) {
  this.apiClient = apiClient
}

Invoice.prototype.get = function(invoiceId, callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.GET,
    path: `/veem/v1.1/invoices/${invoiceId}`,
  }, callback)
}

Invoice.prototype.list = function(callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.GET,
    path: '/veem/v1.1/invoices',
  }, callback)
}

Invoice.prototype.draft = function(invoice, callback) {
  var computedInvoice = Object.assign({}, invoice, { approveAutomatically: false })

  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: '/veem/v1.1/invoices',
    payload: computedInvoice,
  }, callback)
}

Invoice.prototype.send = function(invoice, callback) {
  var computedInvoice = Object.assign({}, invoice, { approveAutomatically: true })

  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: '/veem/v1.1/invoices',
    payload: computedInvoice,
  }, callback)
}

Invoice.prototype.sendById = function(invoiceId, callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: `/veem/v1.1/invoices/${invoiceId}/approve`,
  }, callback)
}

Invoice.prototype.cancel = function(invoiceId, callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: `/veem/v1.1/invoices/${invoiceId}/cancel`,
  }, callback)
}

module.exports = Invoice
