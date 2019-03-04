var ApiClient = require('./lib/utils/api-client')
var Payment = require('./lib/resources/payment')
var Invoice = require('./lib/resources/invoice')
var Attachment = require('./lib/resources/attachment')
var Authorization = require('./lib/resources/authorization')
var ExchangeRate = require('./lib/resources/exchange-rate')
var Metadata = require('./lib/resources/metadata')
var Contact = require('./lib/resources/contact')
var Customer = require('./lib/resources/customer')

function Client(configuration) {
  this.setup(configuration)
  this.authenticate(configuration.accessToken)
}

Client.prototype.setup = function (configuration) {
  this.configuration = configuration
  this.apiClient = new ApiClient(configuration.environment)

  this.metadata = new Metadata(this.apiClient)
  this.payment = new Payment(this.apiClient)
  this.invoice = new Invoice(this.apiClient)
  this.exchangeRate = new ExchangeRate(this.apiClient)
  this.authorization = new Authorization(this.apiClient)
  this.contact = new Contact(this.apiClient)
  this.customer = new Customer(this.apiClient)
}

Client.prototype.authenticate = function (accessToken) {
  this.apiClient.accessToken = accessToken
}

module.exports = Client
