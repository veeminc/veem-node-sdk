class Attachment {
  constructor (client) {
    this.client = client
    // this.attachmentController = new this.client.api.AttachmentControllerApi()
  }

  upload (file, callback) {
    this.attachmentController.uploadAttachment(file, callback)
  }
}

export default Attachment
