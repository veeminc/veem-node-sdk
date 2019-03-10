var superagent = require('superagent')
var uniqueId = require('lodash.uniqueId')
var isFile = require('./is-file')
var buildUrl = require('./build-url')
var HTTP_METHODS = require('../constants/http-methods')
var CONTENT_TYPE = require('../constants/content-type')

var DEFAULT_ENVIRONMENT = 'sandbox'

var ENVIRONMENT_CONFIG = {
  sandbox: {
    basePath: 'sandbox-api.veem.com',
  },
}

var DEFAULT_REQUEST_HEADER_OPTIONS = {
  Accept: 'application/json',
  'Content-Type': CONTENT_TYPE.JSON,
}

function ApiClient (environment = DEFAULT_ENVIRONMENT) {
  var environmentConfig = ENVIRONMENT_CONFIG[environment] || ENVIRONMENT_CONFIG[DEFAULT_ENVIRONMENT]

  this.basePath = environmentConfig.basePath
  this.accessToken = null
}

ApiClient.prototype.buildUrl = buildUrl

ApiClient.prototype.isFile = isFile

ApiClient.prototype.call = function ({
  method = HTTP_METHODS.GET,
  path = null,
  requestHeaderOptions = {},
  queries = {},
  payload = null,
}, callback) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var apiUrl = _this.buildUrl(_this.basePath, path)
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

    var isMultipartFormData = computedRequestHeaderOptions['Content-Type'] === CONTENT_TYPE.FORM_DATA

    request
      .query(queries)
      .set(computedRequestHeaderOptions)

    if (isMultipartFormData) {
      var payloadKeys = Object.keys(payload)

      payloadKeys.forEach(function (key) {
        var field = payload[key]

        if (_this.isFile(field)) {
          request.attach(key, field)
        } else {
          request.field(key, field)
        }
      })
    } else {
      request.send(payload)
    }

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
