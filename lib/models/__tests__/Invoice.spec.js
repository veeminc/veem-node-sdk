import Invoice from 'models/Invoice'

describe('Invoice Model', () => {
  describe('request', () => {
    it('should match the snapshot', () => {
      expect(Invoice.request.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(Invoice.request.schema).to.be.validJsonSchema
    })
  })

  describe('response', () => {
    it('should match the snapshot', () => {
      expect(Invoice.response.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(Invoice.response.schema).to.be.validJsonSchema
    })
  })
})
