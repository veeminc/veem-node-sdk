import ApiClient from 'utils/apiClient'
import Payment from 'controllers/Payment'
import Invoice from 'controllers/Invoice'
import Attachment from 'controllers/Attachment'
import ExchangeRate from 'controllers/ExchangeRate'
import Metadata from 'controllers/Metadata'
import Contact from 'controllers/Contact'
import Customer from 'controllers/Customer'
import Webhook from 'controllers/Webhook'

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
