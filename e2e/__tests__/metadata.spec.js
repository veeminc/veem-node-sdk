import CONFIG from '../config'
import CountryCurrency from 'models/country-currency'
import ErrorCode from 'models/error-code'
import every from 'lodash/every'
import VeemSDK from 'VeemSDK'

describe('metadata', () => {
  const veemSDK = new VeemSDK(CONFIG)

  describe('metadata.getCountryCurrencyMap', () => {
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.metadata.getCountryCurrencyMap()
    })

    it('should return a list of CountryCurrency models', () => {
      const isEveryResourceCountryCurrencyModel = every(responseBody, resource => CountryCurrency.response.validate(resource))

      expect(isEveryResourceCountryCurrencyModel).to.be.true
    })
  })

  describe('metadata.getErrorCodes', () => {
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.metadata.getErrorCodes()
    })

    it('should return a list of ErrorCode models', () => {
      const isEveryResourceErrorCodeModel = every(responseBody, resource => ErrorCode.response.validate(resource))

      expect(isEveryResourceErrorCodeModel).to.be.true
    })
  })
})
