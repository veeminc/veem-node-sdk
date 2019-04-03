import ErrorCode from 'models/error-code'

describe('ErrorCode Model', () => {
  describe('response', () => {
    it('should match the snapshot', () => {
      expect(ErrorCode.response.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(ErrorCode.response.schema).to.be.validJsonSchema
    })
  })
})
