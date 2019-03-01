import VeemApi from 'veem_api'
import nock from 'nock'
import sinon from 'sinon'
import moment from 'moment'
import PaymentController from '../payment'
import uniqueId from 'lodash.uniqueid'

const PAYMENT_ID = 1234

describe('Payment Controller', () => {
  let paymentController
  let scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  beforeAll(() => {
    paymentController = new PaymentController({
      api: VeemApi,
    })
  })

  afterAll(() => {
    scope.cleanAll()
    scope.enableNetConnect()
  })

  describe('list', () => {
    let callback = sinon.spy()

    const payments = [
      {
        id: 1234,
        claimLink: '',
        amount: {
          currency: 'USD',
          number: 150,
        },
        status: 'PendingAuth',
        timeCreated: moment().unix(),
        timeUpdated: moment().unix(),
      },
      {
        id: 1235,
        claimLink: '',
        amount: {
          currency: 'USD',
          number: 150,
        },
        status: 'PendingAuth',
        timeCreated: moment().unix(),
        timeUpdated: moment().unix(),
      },
    ]

    beforeAll(async () => {
      const response = {
        totalElements: 2,
        totalPages: 1,
        numberOfElements: 2,
        number: 0,
        size: 25,
        first: true,
        last: true,
        sort: null,
        content: payments,
      }

      scope
        .get('/payments')
        .reply(200, response)

      await paymentController.list(callback)
    })

    afterAll(() => {
      callback.resetHistory()
    })

    it('should call the API', () => {
      expect(scope).to.have.been.requested
    })

    it('should execute the callback', () => {
      expect(callback).to.have.been.called
    })
  })

  describe('get', () => {
    let callback = sinon.spy()

    const response = {
      id: PAYMENT_ID,
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
        .get(`/payments/${PAYMENT_ID}`)
        .reply(200, response)

      await paymentController.get(PAYMENT_ID, callback)
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

    const payment = {
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

    const response = Object.assign({}, payment, {
      id: uniqueId(),
      status: 'Draft',
      claimLink: '',
    })

    beforeAll(async () => {
      scope
        .post('/payments')
        .reply(200, response)

      await paymentController.draft(payment, callback)
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

    const payment = {
      id: PAYMENT_ID,
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

    const response = Object.assign({}, payment, {
      id: uniqueId(),
      status: 'Sent',
      claimLink: '',
    })

    beforeAll(async () => {
      scope
        .post('/payments')
        .reply(200, response)

      await paymentController.send(payment, callback)
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

  describe('sendById', () => {
    let callback = sinon.spy()

    beforeAll(async () => {
      scope
        .log(console.warn)
        .post(`/payments/${PAYMENT_ID}/approve`)
        .reply(200, null)

      await paymentController.sendById(PAYMENT_ID, callback)
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
        .post(`/payments/${PAYMENT_ID}/cancel`)
        .reply(200, null)

      await paymentController.cancel(PAYMENT_ID, callback)
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
