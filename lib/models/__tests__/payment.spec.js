import PaymentModel from 'models/payment'
import merge from 'lodash/merge'
import PAYMENT_MOCK from './__mocks__/payment'

describe('Payment Model', () => {
  it('should match the snapshot', () => {
    expect(PaymentModel.schema).toMatchSnapshot()
  })

  it('should define a valid schema', () => {
    expect(PaymentModel.schema).to.be.validJsonSchema
  })

  it('should filter out invalid properties', () => {
    const invalidPaymentRequest = merge({}, PAYMENT_MOCK, {
      foo: 'bar',
      amount: {
        foo: 'bar',
      },
      payee: {
        foo: 'bar',
      },
    })

    const payment = new PaymentModel(invalidPaymentRequest)
    const actualPaymentRequest = payment.request()

    expect(actualPaymentRequest).to.deep.equal(PAYMENT_MOCK)
  })
})
