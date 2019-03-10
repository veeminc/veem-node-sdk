const ApiClient = require('veem_api/src/ApiClient')

function Authorization (client) {
  this.client = client
}

Authorization.prototype.generate = function(options, callback) {
  var ApiClient = new this.client.api.ApiClient()
  var configuration = this.client.configuration

  var pathParams = {}
  var queryParams = {}
  var collectionQueryParams = {}
  var headerParams = {
    Authorization: 'Basic ' + new Buffer(configuration.clientId + ':' + configuration.clientSecret).toString('base64'),
  }
  var formParams = {
    scope: 'all',
    grant_type: 'client_credentials',
  }
  var postBody = null
  var authNames = ['OAuth2']
  var contentTypes = ['application/x-www-form-urlencoded']
  var accepts = ['application/json']
  var returnType = 'json'

  ApiClient.callApi('/oauth/token', 'POST', pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback)
}

module.exports = Authorization
