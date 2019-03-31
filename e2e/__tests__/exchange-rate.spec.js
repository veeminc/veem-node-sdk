import CONFIG from '../config'
import VeemSDK from 'VeemSDK'
import ExchangeRate from 'models/exchange-rate'
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
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.exchangeRate.quote(EXCHANGE_RATE)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a ExchangeRate model', () => {
      const isExchangeRateResponseModelValid = ExchangeRate.response.validate(responseBody)

      expect(isExchangeRateResponseModelValid).to.be.true
    })
  })

  describe('batches', () => {
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
        responseBody = await veemSDK.exchangeRate.quote(EXCHANGE_RATES)
      })

      it('should not return a batch response body', () => {
        expect(responseBody).to.have.property('failure')
        expect(responseBody).to.have.property('success')
      })
    })
  })
})
