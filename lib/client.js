import ApiClient from 'utils/api-client'
import Payment from 'controllers/payment'
import Invoice from 'controllers/invoice'
import Attachment from 'controllers/attachment'
import ExchangeRate from 'controllers/exchange-rate'
import Metadata from 'controllers/metadata'
import Contact from 'controllers/contact'
import Customer from 'controllers/customer'
import Webhook from 'controllers/webhook'

class Client {
  constructor (configuration) {
    this.configuration = configuration

    this.apiClient = new ApiClient(configuration.environment)
    this.metadata = new Metadata(this.apiClient)
    this.payment = new Payment(this)
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
