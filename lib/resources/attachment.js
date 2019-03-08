var uniqueId = require('lodash.uniqueid')

function Attachment (client) {
  this.client = client
  this.attachmentController = new this.client.api.AttachmentControllerApi()
}

Attachment.prototype.upload = function (file, callback) {
  this.attachmentController.uploadAttachment(file, callback)
}

module.exports = Attachment
