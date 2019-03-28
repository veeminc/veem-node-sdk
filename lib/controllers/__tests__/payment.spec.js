import nock from 'nock'
import sinon from 'sinon'
import moment from 'moment'
import assign from 'lodash/assign'
import uniqueId from 'lodash/uniqueId'
import size from 'lodash/size'
import first from 'lodash/first'
import matches from 'lodash/matches'
import VeemSDK from '../..'

const PAYMENT_ID = 1234
const PAYMENT_BATCH_ID = 123

describe('Payment Controller', () => {
  const scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  let paymentController

  beforeAll(() => {
    paymentController = new VeemSDK({}).payment
  })

  afterEach(() => {
    nock.cleanAll()
  })

  afterAll(() => {
    nock.enableNetConnect()
  })

  describe('list', () => {
    const callback = sinon.spy()

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
        totalElements: size(payments),
        totalPages: 1,
        numberOfElements: size(payments),
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
    const callback = sinon.spy()

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

  describe('getBatch', () => {
    const callback = sinon.spy()

    const response = {
      batchId: PAYMENT_BATCH_ID,
      totalItems: 2,
      processedItems: 2,
      hasErrors: false,
      batchItems: [
        {
          batchItemId: 1,
          status: 'InProgress',
          errorInfo: null,
          accountId: null,
        },
        {
          batchItemId: 2,
          status: 'InProgress',
          errorInfo: null,
          accountId: null,
        },
      ],
      status: 'Completed',
    }

    beforeAll(async () => {
      scope
        .get(`/payments/batch/${PAYMENT_BATCH_ID}`)
        .query(true)
        .reply(200, response)

      await paymentController.getBatch(PAYMENT_BATCH_ID, callback)
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
    const callback = sinon.spy()

    const payments = [
      {
        batchItemId: 1,
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
      },
      {
        batchItemId: 2,
        amount: {
          currency: 'USD',
          number: 240.00,
        },
        payee: {
          countryCode: 'CA',
          email: 'bitheads3@mailinator.com',
          firstName: 'test3',
          lastName: 'test3',
          type: 'Personal',
          phone: '+1-613-355-1523',
        },
      },
    ]

    describe('singular', () => {
      const payment = first(payments)

      const response = assign({}, payment, {
        id: uniqueId(),
        status: 'Sent',
        claimLink: '',
      })

      beforeAll(async () => {
        scope
          .post('/payments', matches({ approveAutomatically: false }))
          .query(true)
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

    describe('batch', () => {
      const response = {
        batchId: uniqueId(),
        totalItems: size(payments),
        processedItems: 0,
        hasErrors: false,
        status: 'InProgress',
      }

      beforeAll(async () => {
        scope
          .post('/payments/batch')
          .query(true)
          .reply(200, response)

        await paymentController.draft(payments, callback)
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

  describe('send', () => {
    const callback = sinon.spy()

    const payments = [
      {
        batchItemId: 1,
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
      },
      {
        batchItemId: 2,
        amount: {
          currency: 'USD',
          number: 240.00,
        },
        payee: {
          countryCode: 'CA',
          email: 'bitheads3@mailinator.com',
          firstName: 'test3',
          lastName: 'test3',
          type: 'Personal',
          phone: '+1-613-355-1523',
        },
      },
    ]

    describe('singular', () => {
      const payment = first(payments)

      const response = assign({}, payment, {
        id: uniqueId(),
        status: 'Sent',
        claimLink: '',
      })

      beforeAll(async () => {
        scope
          .post('/payments', matches({ approveAutomatically: true }))
          .query(true)
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

    describe('batch', () => {
      const response = {
        batchId: uniqueId(),
        totalItems: size(payments),
        processedItems: 0,
        hasErrors: false,
        status: 'InProgress',
      }

      beforeAll(async () => {
        scope
          .post('/payments/batch')
          .query(true)
          .reply(200, response)

        await paymentController.send(payments, callback)
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

  describe('sendById', () => {
    const callback = sinon.spy()

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
    const callback = sinon.spy()

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
