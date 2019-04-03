import Customer from 'models/customer'

describe('Customer Model', () => {
  describe('response', () => {
    it('should match the snapshot', () => {
      expect(Customer.response.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(Customer.response.schema).to.be.validJsonSchema
    })
  })
})
