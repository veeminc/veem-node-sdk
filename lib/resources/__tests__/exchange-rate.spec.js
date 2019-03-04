import nock from 'nock'
import sinon from 'sinon'
import moment from 'moment'
import uniqueId from 'lodash.uniqueid'
import assign from 'lodash.assign'
import ExchangeRateController from '../exchange-rate'
import ApiClient from 'utils/api-client'

describe('ExchangeRate Controller', () => {
  const apiClient = new ApiClient()

  let exchangeRateController
  let scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  beforeAll(() => {
    exchangeRateController = new ExchangeRateController(apiClient)
  })

  afterAll(() => {
    scope.cleanAll()
    scope.enableNetConnect()
  })

  describe('quote', () => {
    let callback = sinon.spy()

    const quote = {
      fromAmount: 100,
      fromCurrency: 'USD',
      recipientAccountEmail: 'test@domain.com',
      toCountry: 'CA',
      toCurrency: 'CAD',
    }

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
})
