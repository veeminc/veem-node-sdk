import nock from 'nock'
import sinon from 'sinon'
import moment from 'moment'
import uniqueId from 'lodash/uniqueid'
import assign from 'lodash/assign'
import first from 'lodash/first'
import map from 'lodash/map'
import VeemSDK from 'VeemSDK'

describe('ExchangeRate Controller', () => {
  const scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  const quotes = [
    {
      batchItemId: 1,
      fromAmount: 100,
      fromCurrency: 'USD',
      recipientAccountEmail: 'test@domain.com',
      toCountry: 'CA',
      toCurrency: 'CAD',
    },
    {
      batchItemId: 2,
      fromAmount: 127,
      fromCurrency: 'CAD',
      recipientAccountEmail: 'test@domain.com',
      toCountry: 'US',
      toCurrency: 'USD',
    },
  ]

  let exchangeRateController

  beforeAll(() => {
    exchangeRateController = new VeemSDK({}).exchangeRate
  })

  afterAll(() => {
    scope.cleanAll()
    scope.enableNetConnect()
  })

  describe('quote', () => {
    const callback = sinon.spy()

    describe('singular', () => {
      const quote = first(quotes)

      const response = assign({}, quote, {
        id: uniqueId(),
        rate: 1.290913,
        expiry: moment().unix(),
      })

      beforeAll(async () => {
        scope
          .post('/exchangerates/quotes')
          .reply(200, response)

        await exchangeRateController.quote(quote, callback)
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

    describe('batch', () => {
      const response = map(quotes, quote => {
        return assign({}, quote, {
          id: uniqueId(),
          rate: 1.290913,
          expiry: moment().unix(),
        })
      })

      beforeAll(async () => {
        scope
          .post('/exchangerates/quotes/batch')
          .reply(200, response)

        await exchangeRateController.quote(quotes, callback)
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
  })
})
