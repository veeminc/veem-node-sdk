var uniqueId = require('lodash.uniqueid')
var HTTP_METHODS = require('../constants/http-methods.js')

function Contact (apiClient) {
  this.apiClient = apiClient
}

Contact.prototype.get = function(contactId, callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.GET,
    path: `/veem/v1.1/contacts/${contactId}`,
  }, callback)
}

Contact.prototype.list = function(callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.GET,
    path: '/veem/v1.1/contacts',
  }, callback)
}

Contact.prototype.create = function(contact, callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: '/veem/v1.1/contacts',
    payload: contact,
  }, callback)
}

module.exports = Contact
