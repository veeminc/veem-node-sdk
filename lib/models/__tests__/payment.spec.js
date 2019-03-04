import PaymentModel from '../payment'
import uniqueId from 'lodash.uniqueid'
import merge from 'lodash.merge'
import moment from 'moment'
import PAYMENT_MOCK from './__mocks__/payment'

describe('Payment Model', () => {
  it('should match the snapshot', () => {
    expect(PaymentModel.prototype.schema).toMatchSnapshot()
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
