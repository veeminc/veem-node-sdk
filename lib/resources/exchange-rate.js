var uniqueId = require('lodash.uniqueid')

function ExchangeRate (client) {
  this.client = client
  this.exchangeRateController = new this.client.api.ExchangeRateControllerApi()
}

ExchangeRate.prototype.quote = function(quote, callback) {
  var options = {
    model: this.client.api.QuoteRequest.constructFromObject(quote),
    xRequestID: uniqueId(),
  }

  console.warn(options)

  return new Promise((resolve, reject) => {
    this.exchangeRateController.createQuote(options, (...args) => {
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

module.exports = ExchangeRate
