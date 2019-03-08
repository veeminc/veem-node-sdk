import PayeeModel from 'models/payee'

describe('Payee Model', () => {
  it('should match the snapshot', () => {
    expect(PayeeModel.schema).toMatchSnapshot()
  })
})
