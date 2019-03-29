import Attachment from 'models/attachment'

describe('Attachment Model', () => {
  describe('request', () => {
    it('should match the snapshot', () => {
      expect(Attachment.request.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(Attachment.request.schema).to.be.validJsonSchema
    })
  })

  describe('response', () => {
    it('should match the snapshot', () => {
      expect(Attachment.response.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(Attachment.response.schema).to.be.validJsonSchema
    })
  })
})
