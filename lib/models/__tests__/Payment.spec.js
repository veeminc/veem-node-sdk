import PaymentModel from 'models/Payment'

describe('Payment Model', () => {
  describe('request', () => {
    it('should match the snapshot', () => {
      expect(PaymentModel.request.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(PaymentModel.request.schema).to.be.validJsonSchema
    })
  })

  describe('response', () => {
    it('should match the snapshot', () => {
      expect(PaymentModel.response.schema).toMatchSnapshot()
    })

    it('should define a valid schema', () => {
      expect(PaymentModel.response.schema).to.be.validJsonSchema
    })
  })
})
