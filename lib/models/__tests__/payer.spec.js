import PayerModel from '../payer'

describe('Payer Model', () => {
  it('should match the snapshot', () => {
    expect(PayerModel.prototype.schema).toMatchSnapshot()
  })
})
