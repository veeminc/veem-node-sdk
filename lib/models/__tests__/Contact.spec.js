import Contact from 'models/Contact'

describe('Contact Model', () => {
  describe('request', () => {
    it('should match the snapshot', () => {
      expect(Contact.request.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(Contact.request.schema).to.be.validJsonSchema
    })
  })

  describe('response', () => {
    it('should match the snapshot', () => {
      expect(Contact.response.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(Contact.response.schema).to.be.validJsonSchema
    })
  })
})
