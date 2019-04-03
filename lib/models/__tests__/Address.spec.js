import Address from 'models/Address'

describe('Address Model', () => {
  it('should match the snapshot', () => {
    expect(Address.schema).toMatchSnapshot()
  })

  it('should define a valid schema', () => {
    expect(Address.schema).to.be.validJsonSchema
  })
})
