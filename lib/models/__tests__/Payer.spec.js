import PayerModel from 'models/Payer'

describe('Payer Model', () => {
  it('should match the snapshot', () => {
    expect(PayerModel.schema).toMatchSnapshot()
  })

  it('should define a valid schema', () => {
    expect(PayerModel.schema).to.be.validJsonSchema
  })
})
