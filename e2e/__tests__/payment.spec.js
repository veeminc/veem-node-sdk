import CONFIG from '../config'
import VeemSDK from 'VeemSDK'
import { spy } from 'sinon'
import Payment from 'models/payment'
import every from 'lodash/every'
import uniqueId from 'lodash/uniqueId'

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
    batchItemId: uniqueId(),
  },
  {
    ...PAYMENT,
    batchItemId: uniqueId(),
  },
]

jest.setTimeout(20000)

describe('Payment', () => {
  const veemSDK = new VeemSDK(CONFIG)

  describe('payment.list', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.payment.list(null, callback)
    })

    it('should return a pagedResponseBody', async () => {
      expect(responseBody).to.be.a.pagedResponseBody()
    })

    it('should return a list of Payment models', () => {
      const isEveryResourcePaymentModel = every(responseBody.content, resource => Payment.response.validate(resource))

      expect(isEveryResourcePaymentModel).to.be.true
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('payment.send', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.payment.send(PAYMENT, callback)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a Payment model', () => {
      const isPaymentResponseModelValid = Payment.response.validate(responseBody)

      expect(isPaymentResponseModelValid).to.be.true
    })

    it('should set the `status` to `Sent`', () => {
      expect(responseBody).to.have.property('status', 'Sent')
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('payment.draft', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.payment.draft(PAYMENT, callback)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a Payment model', () => {
      const isPaymentResponseModelValid = Payment.response.validate(responseBody)

      expect(isPaymentResponseModelValid).to.be.true
    })

    it('should set the `status` to `Drafted`', () => {
      expect(responseBody).to.have.property('status', 'Drafted')
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('payment.sendById', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      const paymentDraft = await veemSDK.payment.draft(PAYMENT)
      responseBody = await veemSDK.payment.sendById(paymentDraft.id, callback)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a Payment model', () => {
      const isPaymentResponseModelValid = Payment.response.validate(responseBody)

      expect(isPaymentResponseModelValid).to.be.true
    })

    it('should set the `status` to `Sent`', () => {
      expect(responseBody).to.have.property('status', 'Sent')
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('payment.get', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      const payment = await veemSDK.payment.send(PAYMENT)
      responseBody = await veemSDK.payment.get(payment.id, callback)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a Payment model', () => {
      const isPaymentResponseModelValid = Payment.response.validate(responseBody)

      expect(isPaymentResponseModelValid).to.be.true
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('payment.cancel', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      const draftPayment = await veemSDK.payment.draft(PAYMENT)
      responseBody = await veemSDK.payment.cancel(draftPayment.id, callback)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a Payment model', () => {
      const isPaymentResponseModelValid = Payment.response.validate(responseBody)

      expect(isPaymentResponseModelValid).to.be.true
    })

    it('should set the `status` to `Cancelled`', () => {
      expect(responseBody).to.have.property('status', 'Cancelled')
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('batches', () => {
    describe('payment.draft', () => {
      const callback = spy()
      let responseBody

      beforeAll(async () => {
        responseBody = await veemSDK.payment.draft(PAYMENTS, callback)
      })

      it('should not return a batch response body', () => {
        expect(responseBody).to.be.a.batchResponseBody()
      })

      it('should have invoked the callback', () => {
        expect(callback).to.have.been.calledOnce
      })
    })

    describe('payment.send', () => {
      const callback = spy()
      let responseBody

      beforeAll(async () => {
        responseBody = await veemSDK.payment.send(PAYMENTS, callback)
      })

      it('should not return a batch response body', () => {
        expect(responseBody).to.be.a.batchResponseBody()
      })

      it('should have invoked the callback', () => {
        expect(callback).to.have.been.calledOnce
      })
    })

    describe('payment.getBatch', () => {
      const callback = spy()
      let responseBody

      beforeAll(async () => {
        const batchResponseBody = await veemSDK.payment.draft(PAYMENTS)
        responseBody = await veemSDK.payment.getBatch(batchResponseBody.batchId, callback)
      })

      it('should return a batch response body', () => {
        expect(responseBody).to.be.a.batchResponseBody()
      })

      it('should have invoked the callback', () => {
        expect(callback).to.have.been.calledOnce
      })
    })
  })
})
