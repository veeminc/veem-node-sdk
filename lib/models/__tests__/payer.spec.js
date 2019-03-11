import PayerModel from 'models/payer'

describe('Payer Model', () => {
  it('should match the snapshot', () => {
    expect(PayerModel.schema).toMatchSnapshot()
  })
})
