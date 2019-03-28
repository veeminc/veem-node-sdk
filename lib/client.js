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
  constructor (configuration = {}) {
    this.configuration = configuration

    this.apiClient = new ApiClient(configuration.environment)
    this.metadata = new Metadata(this)
    this.payment = new Payment(this)
    this.invoice = new Invoice(this)
    this.exchangeRate = new ExchangeRate(this)
    this.contact = new Contact(this)
    this.customer = new Customer(this)
    this.attachment = new Attachment(this)
    this.webhook = new Webhook(this)

    this.authenticate()
  }

  authenticate () {
    const { accessToken } = this.configuration

    this.apiClient.accessToken = accessToken
  }
}

export default Client
