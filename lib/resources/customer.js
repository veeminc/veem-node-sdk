function Customer (client) {
  this.client = client
  this.CustomerController = new this.client.api.CustomerControllerApi()
}

Customer.prototype.list = function(email, callback) {
  const options = {
    email,
  }

  return new Promise((resolve, reject) => {
    this.CustomerController.getCustomers(options, (...args) => {
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

module.exports = Customer
