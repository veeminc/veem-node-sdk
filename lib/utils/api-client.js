var superagent = require('superagent')
var trim = require('lodash.trim')
var uniqueId = require('lodash.uniqueId')
var HTTP_METHODS = require('../constants/http-methods')

var DEFAULT_ENVIRONMENT = 'sandbox'

var ENVIRONMENT_CONFIG = {
  sandbox: {
    basePath: 'sandbox-api.veem.com',
  },
}

var DEFAULT_REQUEST_HEADER_OPTIONS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

function ApiClient (environment = DEFAULT_ENVIRONMENT) {
  var environmentConfig = ENVIRONMENT_CONFIG[environment] || ENVIRONMENT_CONFIG[DEFAULT_ENVIRONMENT]

  this.basePath = environmentConfig.basePath
  this.accessToken = null
}

ApiClient.prototype.buildUrl = function (path) {
  var cleanedPath = trim(path, '/')
  var url = `https://${this.basePath}/${cleanedPath}`

  return url
}

ApiClient.prototype.call = function ({
  method = HTTP_METHODS.GET,
  path = null,
  requestHeaderOptions = {},
  queries = {},
  payload = null,
}, callback) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var apiUrl = _this.buildUrl(path)
    var request = superagent(method, apiUrl)

    var computedRequestHeaderOptions = Object.assign(
      {
        'X-Request-ID': uniqueId(Date.now()),
      },
      DEFAULT_REQUEST_HEADER_OPTIONS,
      requestHeaderOptions,
      {
        Authorization: `Bearer ${_this.accessToken}`,
      }
    )

    request
      .query(queries)
      .send(payload)

    var requestHeaderOptionKeys = Object.keys(computedRequestHeaderOptions)

    requestHeaderOptionKeys.forEach(function (headerOptionKey) {
      request.set(headerOptionKey, computedRequestHeaderOptions[headerOptionKey])
    })

    request.end(function(error, response) {
      const hasError = !!error

      callback && callback(error, response.text, response)

      hasError ?
        reject(error, response) :
        resolve(response.text, response)

    })
  })
}

module.exports = ApiClient