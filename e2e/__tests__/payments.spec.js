import CONFIG from '../config.json'
import VeemSDK from '../../lib'

const PAYMENT = {
  amount: {
    currency: 'USD',
    number: 100.00,
  },
  payee: {
    countryCode: 'CA',
    email: 'bitheads2@mailinator.com',
    firstName: 'test2',
    lastName: 'test2',
    type: 'Personal',
    phone: '+1-613-555-1234',
  },
}

const PAYMENTS = [
  {
    ...PAYMENT,
    batchItemId: 1,
  },
  {
    ...PAYMENT,
    batchItemId: 2,
  },
]

const {
  accessToken,
} = CONFIG

describe('Payment', () => {
  const veemSDK = new VeemSDK({
    accessToken,
  })

  describe('payment.list', () => {
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.payment.list()
    })

    it('should return a pagedResponseBody', async () => {
      expect(responseBody).to.be.a.pagedResponseBody()
    })
  })

  describe('payment.send', () => {
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.payment.send(PAYMENT)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })
  })

  describe('payment.draft', () => {
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.payment.draft(PAYMENT)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })
  })

  describe('payment.sendById', () => {
    let responseBody

    beforeAll(async () => {
      const paymentDraft = await veemSDK.payment.draft(PAYMENT)
      responseBody = await veemSDK.payment.sendById(paymentDraft.id)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })
  })

  describe('payment.get', () => {
    let responseBody

    beforeAll(async () => {
      const payment = await veemSDK.payment.send(PAYMENT)
      responseBody = await veemSDK.payment.get(payment.id)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })
  })

  describe('payment.cancel', () => {
    let responseBody

    beforeAll(async () => {
      const draftPayment = await veemSDK.payment.draft(PAYMENT)
      responseBody = await veemSDK.payment.cancel(draftPayment.id)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })
  })

  describe('batches', () => {
    describe('payment.draft', () => {
      let responseBody

      beforeAll(async () => {
        responseBody = await veemSDK.payment.draft(PAYMENTS)
      })

      it('should not return a batch response body', () => {
        expect(responseBody).to.be.a.batchResponseBody()
      })
    })

    describe('payment.send', () => {
      let responseBody

      beforeAll(async () => {
        responseBody = await veemSDK.payment.send(PAYMENTS)
      })

      it('should not return a batch response body', () => {
        expect(responseBody).to.be.a.batchResponseBody()
      })
    })

    describe('payment.getBatch', () => {
      let responseBody

      beforeAll(async () => {
        const batchResponseBody = await veemSDK.payment.draft(PAYMENTS)
        responseBody = await veemSDK.payment.getBatch(batchResponseBody.batchId)
      })

      it('should not return a batch response body', () => {
        expect(responseBody).to.be.a.batchResponseBody()
      })
    })
  })
})
