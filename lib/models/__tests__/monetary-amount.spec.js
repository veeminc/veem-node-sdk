import MonetaryAmount from 'models/monetary-amount'

describe('MonetaryAmount Model', () => {
  it('should match the snapshot', () => {
    expect(MonetaryAmount.schema).toMatchSnapshot()
  })

  it('should define a valid schema', () => {
    expect(MonetaryAmount.schema).to.be.validJsonSchema
  })
})
