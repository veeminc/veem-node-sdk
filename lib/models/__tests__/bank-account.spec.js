import BankAccount from 'models/bank-account'

describe('BankAccount Model', () => {
  it('should match the snapshot', () => {
    expect(BankAccount.schema).toMatchSnapshot()
  })

  it('should define a valid schema', () => {
    expect(BankAccount.schema).to.be.validJsonSchema
  })
})
