import CONFIG from '../config'
import VeemSDK from 'VeemSDK'
import { spy } from 'sinon'
import ExchangeRate from 'models/ExchangeRate'
import uniqueId from 'lodash/uniqueId'
import generateEmail from 'random-email'

const EXCHANGE_RATE = {
  fromAmount: 100,
  fromCurrency: 'USD',
  recipientAccountEmail: generateEmail({ domain: 'example.com' }),
  toAmount: undefined,
  toCountry: 'US',
  toCurrency: 'USD',
}

describe('ExchangeRate', () => {
  const veemSDK = new VeemSDK(CONFIG)

  describe('exchangeRate.quote', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.exchangeRate.quote(EXCHANGE_RATE, callback)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a ExchangeRate model', () => {
      const isExchangeRateResponseModelValid = ExchangeRate.response.validate(responseBody)

      expect(isExchangeRateResponseModelValid).to.be.true
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('batches', () => {
    const callback = spy()

    const EXCHANGE_RATES = [
      {
        ...EXCHANGE_RATE,
        batchItemId: uniqueId(),
      },
      {
        ...EXCHANGE_RATE,
        batchItemId: uniqueId(),
      },
    ]

    describe('exchangeRate.quote', () => {
      let responseBody

      beforeAll(async () => {
        responseBody = await veemSDK.exchangeRate.quote(EXCHANGE_RATES, callback)
      })

      it('should not return a batch response body', () => {
        expect(responseBody).to.have.property('failure')
        expect(responseBody).to.have.property('success')
      })

      it('should have invoked the callback', () => {
        expect(callback).to.have.been.calledOnce
      })
    })
  })
})
