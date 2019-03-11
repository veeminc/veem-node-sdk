import nock from 'nock'
import sinon from 'sinon'
import moment from 'moment'
import assign from 'lodash/assign'
import uniqueId from 'lodash/uniqueId'
import matches from 'lodash/matches'
import PaymentController from '../payment'
import ApiClient from 'utils/api-client'

const PAYMENT_ID = 1234

describe('Payment Controller', () => {
  const apiClient = new ApiClient()
  const scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  let paymentController

  beforeAll(() => {
    paymentController = new PaymentController(apiClient)
  })

  afterEach(() => {
    nock.cleanAll()
  })

  afterAll(() => {
    nock.enableNetConnect()
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

    const response = assign({}, payment, {
      id: uniqueId(),
      status: 'Draft',
      claimLink: '',
    })

    beforeAll(async () => {
      scope
        .post('/payments', matches({ approveAutomatically: false }))
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
      expect(scope).to.have.been.requested
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

    const response = assign({}, payment, {
      id: uniqueId(),
      status: 'Sent',
      claimLink: '',
    })

    beforeAll(async () => {
      scope
        .post('/payments', matches({ approveAutomatically: true }))
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
      expect(scope).to.have.been.requested
    })
  })

  describe('sendById', () => {
    let callback = sinon.spy()

    beforeAll(async () => {
      scope
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
