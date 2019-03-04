import VeemApi from 'veem_api'
import nock from 'nock'
import sinon from 'sinon'
import moment from 'moment'
import InvoiceController from '../invoice'
import uniqueId from 'lodash.uniqueid'
import assign from 'lodash.assign'

const INVOICE_ID = 1234

describe('Invoice Controller', () => {
  let invoiceController
  let scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  beforeAll(() => {
    invoiceController = new InvoiceController({
      api: VeemApi,
    })
  })

  afterAll(() => {
    scope.cleanAll()
    scope.enableNetConnect()
  })

  describe('get', () => {
    let callback = sinon.spy()

    const response = {
      id: INVOICE_ID,
      claimLink: '',
      payee: {
        countryCode: 'US',
        email: 'email@domain.com',
        phone: 'tel:+1-613-429-2413',
        firstName: 'Johny',
        lastName: 'Cash',
      },
      amount: {
        currency: 'USD',
        number: 150,
      },
      status: 'Sent',
      timeCreated: moment().unix(),
      timeUpdated: moment().unix(),
    }

    beforeAll(async () => {
      scope
        .get(`/invoices/${INVOICE_ID}`)
        .reply(200, response)

      await invoiceController.get(INVOICE_ID, callback)
    })

    afterAll(() => {
      callback.resetHistory()
    })

    it('should execute the callback', () => {
      expect(callback).to.have.been.called
    })

    it('should call the API', () => {
      expect(scope).to.have.been.requested
    })
  })

  describe('draft', () => {
    let callback = sinon.spy()

    const invoice = {
      payee: {
        countryCode: 'US',
        email: 'email@domain.com',
        phone: 'tel:+1-613-429-2413',
        firstName: 'Johny',
        lastName: 'Cash',
      },
      amount: {
        currency: 'USD',
        number: 150,
      },
      timeCreated: moment().unix(),
      timeUpdated: moment().unix(),
    }

    const response = assign({}, invoice, {
      id: uniqueId(),
      status: 'Draft',
      claimLink: '',
    })

    beforeAll(async () => {
      scope
        .post('/invoices')
        .reply(200, response)

      await invoiceController.draft(invoice, callback)
    })

    afterAll(() => {
      callback.resetHistory()
    })

    it('should execute the callback', () => {
      expect(callback).to.have.been.called
    })

    it('should call the API', () => {
      expect(scope).to.have.been.requestedWith({ approveAutomatically: false })
    })
  })

  describe('send', () => {
    let callback = sinon.spy()

    const invoice = {
      id: INVOICE_ID,
      payee: {
        countryCode: 'US',
        email: 'email@domain.com',
        phone: 'tel:+1-613-429-2413',
        firstName: 'Johny',
        lastName: 'Cash',
      },
      amount: {
        currency: 'USD',
        number: 150,
      },
      status: 'Sent',
      timeCreated: moment().unix(),
      timeUpdated: moment().unix(),
    }

    const response = assign({}, invoice, {
      id: uniqueId(),
      status: 'Sent',
      claimLink: '',
    })

    beforeAll(async () => {
      scope
        .post('/invoices')
        .reply(200, response)

      await invoiceController.send(invoice, callback)
    })

    afterAll(() => {
      callback.resetHistory()
    })

    it('should execute the callback', () => {
      expect(callback).to.have.been.called
    })

    it('should call the API', () => {
      expect(scope).to.have.been.requestedWith({ approveAutomatically: true })
    })
  })

  describe('cancel', () => {
    let callback = sinon.spy()

    beforeAll(async () => {
      scope
        .post(`/invoices/${INVOICE_ID}/cancel`)
        .reply(200, null)

      await invoiceController.cancel(INVOICE_ID, callback)
    })

    afterAll(() => {
      callback.resetHistory()
    })

    it('should execute the callback', () => {
      expect(callback).to.have.been.called
    })

    it('should call the API', () => {
      expect(scope).to.have.been.requested
    })
  })
})
