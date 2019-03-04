var VeemApi = require('veem_api')
var Payment = require('./lib/resources/payment')
var Invoice = require('./lib/resources/invoice')
var Attachment = require('./lib/resources/attachment')
var Authorization = require('./lib/resources/authorization')
var ExchangeRate = require('./lib/resources/exchange-rate')
var Metadata = require('./lib/resources/metadata')
var Contact = require('./lib/resources/contact')
var Customer = require('./lib/resources/customer')

function Client(configuration) {
  this.api = VeemApi

  this.Metadata = new Metadata(this)
  this.payment = new Payment(this)
  this.invoice = new Invoice(this)
  this.exchangeRate = new ExchangeRate(this)
  this.authorization = new Authorization(this)
  this.contact = new Contact(this)
  this.customer = new Customer(this)

  this.setup(configuration)
  this.generateToken()
}

Client.prototype.setup = function (configuration) {
  this.configuration = configuration
}

Client.prototype.generateToken = function () {
  var _this = this

  var callback = function(error, data) {
    _this.api.ApiClient.instance.authentications['OAuth2'].accessToken = data.access_token
  }

  var access = this.authorization.generate({
    clientId: this.configuration.clientId,
    clientSecret: this.configuration.clientSecret,
  }, callback)
}

module.exports = Client
