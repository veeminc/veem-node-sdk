var uniqueId = require('lodash.uniqueid')
var HTTP_METHODS = require('../constants/http-methods.js')
var CONTENT_TYPE = require('../constants/content-type.js')

function Attachment (apiClient) {
  this.apiClient = apiClient
}

Attachment.prototype.upload = function (file, callback) {
  return this.apiClient.call({
    method: HTTP_METHODS.POST,
    path: `/veem/v1.1/attachments`,
    requestHeaderOptions: {
      'Content-Type': CONTENT_TYPE.FORM_DATA
    },
    payload: {
      file,
    }
  }, callback)
}

module.exports = Attachment
