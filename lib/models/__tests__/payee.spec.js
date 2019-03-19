import PayeeModel from 'models/payee'

describe('Payee Model', () => {
  it('should match the snapshot', () => {
    expect(PayeeModel.schema).toMatchSnapshot()
  })

  it('should define a valid schema', () => {
    expect(PayeeModel.schema).to.be.validJsonSchema
  })
})
