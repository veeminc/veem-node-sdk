var HTTP_METHODS = require('../constants/http-methods.js')

function Metadata (apiClient) {
  this.apiClient = apiClient
}

Metadata.prototype.getCountryCurrencyMap = function(callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.GET,
    path: '/veem/public/v1.1/country-currency-map',
  }, callback)
}

Metadata.prototype.getErrorCodes = function(callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.GET,
    path: '/veem/public/v1.1/errorcodes',
  }, callback)
}

module.exports = Metadata
