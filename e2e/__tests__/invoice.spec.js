import CONFIG from '../config'
import VeemSDK from 'VeemSDK'
import Invoice from 'models/invoice'
import { spy } from 'sinon'

const INVOICE = {
  amount: {
    currency: 'USD',
    number: 100.00,
  },
  payer: {
    countryCode: 'CA',
    email: 'bitheads2@mailinator.com',
    firstName: 'test2',
    lastName: 'test2',
    type: 'Personal',
    phone: '+1-613-555-1234',
  },
}

jest.setTimeout(20000)

describe('invoice', () => {
  const veemSDK = new VeemSDK(CONFIG)

  describe('invoice.send', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.invoice.send(INVOICE, callback)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a invoice model', () => {
      const isInvoiceResponseModelValid = Invoice.response.validate(responseBody)

      expect(isInvoiceResponseModelValid).to.be.true
    })

    it('should set the `status` to `Sent`', () => {
      expect(responseBody).to.have.property('status', 'Sent')
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('invoice.draft', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.invoice.draft(INVOICE, callback)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a invoice model', () => {
      const isInvoiceResponseModelValid = Invoice.response.validate(responseBody)

      expect(isInvoiceResponseModelValid).to.be.true
    })

    xit('should set the `status` to `Drafted`', () => {
      expect(responseBody).to.have.property('status', 'Drafted')
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  xdescribe('invoice.sendById', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      const invoiceDraft = await veemSDK.invoice.draft(INVOICE)
      responseBody = await veemSDK.invoice.sendById(invoiceDraft.id, callback)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a invoice model', () => {
      const isInvoiceResponseModelValid = Invoice.response.validate(responseBody)

      expect(isInvoiceResponseModelValid).to.be.true
    })

    it('should set the `status` to `Sent`', () => {
      expect(responseBody).to.have.property('status', 'Sent')
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('invoice.get', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      const invoice = await veemSDK.invoice.send(INVOICE, callback)
      responseBody = await veemSDK.invoice.get(invoice.id)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a invoice model', () => {
      const isInvoiceResponseModelValid = Invoice.response.validate(responseBody)

      expect(isInvoiceResponseModelValid).to.be.true
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('invoice.cancel', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      const draftinvoice = await veemSDK.invoice.draft(INVOICE, callback)
      responseBody = await veemSDK.invoice.cancel(draftinvoice.id)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a invoice model', () => {
      const isInvoiceResponseModelValid = Invoice.response.validate(responseBody)

      expect(isInvoiceResponseModelValid).to.be.true
    })

    it('should set the `status` to `Cancelled`', () => {
      expect(responseBody).to.have.property('status', 'Cancelled')
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })
})
