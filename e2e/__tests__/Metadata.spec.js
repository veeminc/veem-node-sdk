import CONFIG from '../config'
import CountryCurrency from 'models/CountryCurrency'
import ErrorCode from 'models/ErrorCode'
import { spy } from 'sinon'
import every from 'lodash/every'
import VeemSDK from 'VeemSDK'

describe('metadata', () => {
  const veemSDK = new VeemSDK(CONFIG)

  describe('metadata.getCountryCurrencyMap', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.metadata.getCountryCurrencyMap(null, callback)
    })

    it('should return a list of CountryCurrency models', () => {
      const isEveryResourceCountryCurrencyModel = every(responseBody, resource => CountryCurrency.response.validate(resource))

      expect(isEveryResourceCountryCurrencyModel).to.be.true
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('metadata.getErrorCodes', () => {
    const callback = spy()
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.metadata.getErrorCodes(callback)
    })

    it('should return a list of ErrorCode models', () => {
      const isEveryResourceErrorCodeModel = every(responseBody, resource => ErrorCode.response.validate(resource))

      expect(isEveryResourceErrorCodeModel).to.be.true
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })
})
