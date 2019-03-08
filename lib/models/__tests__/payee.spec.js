import PayeeModel from '../payee'

describe('Payee Model', () => {
  it('should match the snapshot', () => {
    expect(PayeeModel.prototype.schema).toMatchSnapshot()
  })
})
