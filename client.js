import ApiClient from './lib/utils/api-client'
import Payment from './lib/resources/payment'
import Invoice from './lib/resources/invoice'
import Attachment from './lib/resources/attachment'
import ExchangeRate from './lib/resources/exchange-rate'
import Metadata from './lib/resources/metadata'
import Contact from './lib/resources/contact'
import Customer from './lib/resources/customer'

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

    this.authenticate()
  }

  authenticate () {
    const { accessToken } = this.configuration

    this.apiClient.accessToken = accessToken
  }
}

export default Client
