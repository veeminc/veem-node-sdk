import MonetaryAmount from '../monetary-amount'

describe('MonetaryAmount Model', () => {
  it('should match the snapshot', () => {
    expect(MonetaryAmount.prototype.schema).toMatchSnapshot()
  })
})
