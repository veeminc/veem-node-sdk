import InvoiceModel from 'models/invoice'
import merge from 'lodash/merge'
import INVOICE_MOCK from './__mocks__/invoice'

describe('Invoice Model', () => {
  it('should match the snapshot', () => {
    expect(InvoiceModel.schema).toMatchSnapshot()
  })

  it('should define a valid schema', () => {
    expect(InvoiceModel.schema).to.be.validJsonSchema
  })

  it('should filter out invalid properties', () => {
    const invalidInvoiceRequest = merge({}, INVOICE_MOCK, {
      foo: 'bar',
      amount: {
        foo: 'bar',
      },
      payer: {
        foo: 'bar',
      },
    })

    const invoice = new InvoiceModel(invalidInvoiceRequest)
    const actualInvoiceRequest = invoice.request()

    expect(actualInvoiceRequest).to.deep.equal(INVOICE_MOCK)
  })
})
