var uniqueId = require('lodash.uniqueid')

function Contact (client) {
  this.client = client
  this.contactController = new this.client.api.ContactControllerApi()
}

Contact.prototype.get = function(contactId, callback) {
  return new Promise((resolve, reject) => {
    this.contactController.getContact(contactId, (...args) => {
      callback && callback(...args)
      const error = !!args[0]

      if (error) {
        reject(...args)
      } else {
        resolve(...args)
      }
    })
  })
}

Contact.prototype.list = function(callback) {
  return new Promise((resolve, reject) => {
    this.contactController.getContacts(null, (...args) => {
      callback && callback(...args)
      const error = !!args[0]

      if (error) {
        reject(...args)
      } else {
        resolve(...args)
      }
    })
  })
}

Contact.prototype.create = function(contact, callback) {
  var options = {
    model: this.client.api.ContactRequest.constructFromObject(contact),
    xRequestID: uniqueId(),
  }

  return new Promise((resolve, reject) => {
    this.contactController.createContact(options, (...args) => {
      callback && callback(...args)
      const error = !!args[0]

      if (error) {
        reject(...args)
      } else {
        resolve(...args)
      }
    })
  })
}

module.exports = Contact
