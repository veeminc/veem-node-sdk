import CONFIG from '../config'
import VeemSDK from 'VeemSDK'
import every from 'lodash/every'
import Customer from 'models/Customer'

describe('customer', () => {
  const veemSDK = new VeemSDK(CONFIG)

  describe('customer.list', () => {
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.customer.list('mam@example.com')
    })

    it('should return a pagedResponseBody', async () => {
      expect(responseBody).to.be.a.pagedResponseBody()
    })

    it('should return a list of Payment models', () => {
      const isEveryResourcePaymentModel = every(responseBody.content, resource => Customer.response.validate(resource))

      expect(isEveryResourcePaymentModel).to.be.true
    })
  })
})
