var uniqueId = require('lodash.uniqueid')

function Invoice (client) {
  this.client = client
  this.invoiceController = new this.client.api.InvoiceControllerApi()
}

Invoice.prototype.get = function(invoiceId, callback) {
  return new Promise((resolve, reject) => {
    this.invoiceController.getInvoice(invoiceId, (...args) => {
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

Invoice.prototype.draft = function(invoice, callback) {
  var computedInvoice = Object.assign({}, invoice, { approveAutomatically: false })

  var options = {
    model: this.client.api.InvoiceRequest.constructFromObject(computedInvoice),
    xRequestID: uniqueId(),
  }

  console.warn(options)

  return new Promise((resolve, reject) => {
    this.invoiceController.createInvoice(options, (...args) => {
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

Invoice.prototype.send = function(invoice, callback) {
  var computedInvoice = Object.assign({}, invoice, { approveAutomatically: true })

  var options = {
    model: this.client.api.InvoiceRequest.constructFromObject(computedInvoice),
    xRequestID: uniqueId(),
  }

  return new Promise((resolve, reject) => {
    this.invoiceController.createInvoice(options, (...args) => {
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

Invoice.prototype.sendById = function(invoiceId, callback) {
  var options = {
    xRequestID: uniqueId(),
  }

  return new Promise((resolve, reject) => {
    this.invoiceController.approveInvoice(invoiceId, options, (...args) => {
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

Invoice.prototype.cancel = function(invoiceId, callback) {
  var options = {
    xRequestID: uniqueId(),
  }

  return new Promise((resolve, reject) => {
    this.invoiceController.cancelInvoice(invoiceId, options, (...args) => {
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

module.exports = Invoice
