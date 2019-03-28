import nock from 'nock'
import sinon from 'sinon'
import moment from 'moment'
import uniqueId from 'lodash/uniqueId'
import assign from 'lodash/assign'
import matches from 'lodash/matches'
import VeemSDK from '../..'

const INVOICE_ID = 1234

describe('Invoice Controller', () => {
  const scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  let invoiceController

  beforeAll(() => {
    invoiceController = new VeemSDK({}).invoice
  })

  afterEach(() => {
    nock.cleanAll()
  })

  afterAll(() => {
    nock.enableNetConnect()
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
        .post('/invoices', matches({ approveAutomatically: false }))
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
      expect(scope).to.have.been.requested
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
        .post('/invoices', matches({ approveAutomatically: true }))
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
      expect(scope).to.have.been.requested
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
