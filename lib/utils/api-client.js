var superagent = require('superagent')
var trim = require('lodash.trim')
var uniqueId = require('lodash.uniqueId')
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

ApiClient.prototype.buildUrl = function (path) {
  var cleanedPath = trim(path, '/')
  var url = `https://${this.basePath}/${cleanedPath}`

  return url
}

ApiClient.prototype.isFile = function(param) {
  // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
  if (typeof require === 'function') {
    var fs

    try {
      fs = require('fs')
    } catch (err) {}

    if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
      return true
    }
  }

  // Buffer in Node.js
  if (typeof Buffer === 'function' && param instanceof Buffer) {
    return true
  }

  // Blob in browser
  if (typeof Blob === 'function' && param instanceof Blob) {
    return true
  }

  // File in browser (it seems File object is also instance of Blob, but keep this for safe)
  if (typeof File === 'function' && param instanceof File) {
    return true
  }

  return false
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
          request.attach(key, field)
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
