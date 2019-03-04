var uniqueId = require('lodash.uniqueid')
var HTTP_METHODS = require('../constants/http-methods.js')

function ExchangeRate (apiClient) {
  this.apiClient = apiClient
}

ExchangeRate.prototype.quote = function(quote, callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: '/veem/v1.1/exchangerates/quotes',
    payload: quote,
  }, callback)
}

module.exports = ExchangeRate
