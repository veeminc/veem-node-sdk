import CountryCurrency from 'models/CountryCurrency'

describe('CountryCurrency Model', () => {
  describe('response', () => {
    it('should match the snapshot', () => {
      expect(CountryCurrency.response.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(CountryCurrency.response.schema).to.be.validJsonSchema
    })
  })
})
