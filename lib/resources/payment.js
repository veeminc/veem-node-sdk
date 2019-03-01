var uniqueId = require('lodash.uniqueid')

function Payment (client) {
  this.client = client
  this.paymentController = new this.client.api.PaymentControllerApi()
}

Payment.prototype.get = function(paymentId, callback) {
  return new Promise((resolve, reject) => {
    this.paymentController.getPayment(paymentId, (...args) => {
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

Payment.prototype.list = function(callback) {
  return new Promise((resolve, reject) => {
    this.paymentController.getPayments(null, (...args) => {
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

Payment.prototype.draft = function(payment, callback) {
  var computedPayment = Object.assign({}, payment, { approveAutomatically: false })

  var options = {
    model: this.client.api.PaymentRequest.constructFromObject(computedPayment),
    xRequestID: uniqueId(),
  }

  return new Promise((resolve, reject) => {
    this.paymentController.createPayment(options, (...args) => {
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

Payment.prototype.send = function(payment, callback) {
  var computedPayment = Object.assign({}, payment, { approveAutomatically: true })

  var options = {
    model: this.client.api.PaymentRequest.constructFromObject(computedPayment),
    xRequestID: uniqueId(),
  }

  return new Promise((resolve, reject) => {
    this.paymentController.createPayment(options, (...args) => {
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

Payment.prototype.sendById = function(paymentId, callback) {
  var options = {
    xRequestID: uniqueId(),
  }

  return new Promise((resolve, reject) => {
    this.paymentController.approvePayment(paymentId, options, (...args) => {
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

Payment.prototype.cancel = function(paymentId, callback) {
  var options = {
    xRequestID: uniqueId(),
  }

  return new Promise((resolve, reject) => {
    this.paymentController.cancelPayment(paymentId, options, (...args) => {
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

module.exports = Payment
