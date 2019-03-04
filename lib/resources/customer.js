var HTTP_METHODS = require('../constants/http-methods.js')

function Customer (apiClient) {
  this.apiClient = apiClient
}

Customer.prototype.list = function(email, callback) {
  const queries = {
    email,
  }

  return this.apiClient.call({
    method: HTTP_METHODS.GET,
    path: '/veem/v1.1/customers',
    queries,
  }, callback)
}

module.exports = Customer
