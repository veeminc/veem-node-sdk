import ExchangeRate from 'models/exchange-rate'

describe('ExchangeRate Model', () => {
  describe('request', () => {
    it('should match the snapshot', () => {
      expect(ExchangeRate.request.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(ExchangeRate.request.schema).to.be.validJsonSchema
    })
  })

  describe('response', () => {
    it('should match the snapshot', () => {
      expect(ExchangeRate.response.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(ExchangeRate.response.schema).to.be.validJsonSchema
    })
  })
})
