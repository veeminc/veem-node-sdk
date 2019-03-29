import Webhook from 'models/webhook'

describe('Webhook Model', () => {
  describe('request', () => {
    it('should match the snapshot', () => {
      expect(Webhook.request.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(Webhook.request.schema).to.be.validJsonSchema
    })
  })

  describe('response', () => {
    it('should match the snapshot', () => {
      expect(Webhook.response.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(Webhook.response.schema).to.be.validJsonSchema
    })
  })
})
