import ApiClient from 'utils/api-client'
import Payment from 'resources/payment'
import Invoice from 'resources/invoice'
import Attachment from 'resources/attachment'
import ExchangeRate from 'resources/exchange-rate'
import Metadata from 'resources/metadata'
import Contact from 'resources/contact'
import Customer from 'resources/customer'
import Webhook from 'resources/webhook'

class Client {
  constructor (configuration) {
    this.configuration = configuration

    this.apiClient = new ApiClient(configuration.environment)
    this.metadata = new Metadata(this.apiClient)
    this.payment = new Payment(this.apiClient)
    this.invoice = new Invoice(this.apiClient)
    this.exchangeRate = new ExchangeRate(this.apiClient)
    this.contact = new Contact(this.apiClient)
    this.customer = new Customer(this.apiClient)
    this.attachment = new Attachment(this.apiClient)
    this.webhook = new Webhook(this.apiClient)

    this.authenticate()
  }

  authenticate () {
    const { accessToken } = this.configuration

    this.apiClient.accessToken = accessToken
  }
}

export default Client
