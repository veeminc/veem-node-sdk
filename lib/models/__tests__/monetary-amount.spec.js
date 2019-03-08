import MonetaryAmount from 'models/monetary-amount'

describe('MonetaryAmount Model', () => {
  it('should match the snapshot', () => {
    expect(MonetaryAmount.schema).toMatchSnapshot()
  })
})
