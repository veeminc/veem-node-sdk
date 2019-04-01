import CONFIG from '../config'
import VeemSDK from 'VeemSDK'
import Invoice from 'models/invoice'

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

describe('invoice', () => {
  const veemSDK = new VeemSDK(CONFIG)

  describe('invoice.send', () => {
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.invoice.send(INVOICE)
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
  })

  describe('invoice.draft', () => {
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.invoice.draft(INVOICE)
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
  })

  xdescribe('invoice.sendById', () => {
    let responseBody

    beforeAll(async () => {
      const invoiceDraft = await veemSDK.invoice.draft(INVOICE)
      responseBody = await veemSDK.invoice.sendById(invoiceDraft.id)
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
  })

  describe('invoice.get', () => {
    let responseBody

    beforeAll(async () => {
      const invoice = await veemSDK.invoice.send(INVOICE)
      responseBody = await veemSDK.invoice.get(invoice.id)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a invoice model', () => {
      const isInvoiceResponseModelValid = Invoice.response.validate(responseBody)

      expect(isInvoiceResponseModelValid).to.be.true
    })
  })

  describe('invoice.cancel', () => {
    let responseBody

    beforeAll(async () => {
      const draftinvoice = await veemSDK.invoice.draft(INVOICE)
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
  })
})
