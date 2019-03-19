import WebhookModel from 'models/webhook'
import merge from 'lodash/merge'
import WEBHOOK_MOCK from './__mocks__/webhook'

describe('Webhook Model', () => {
  it('should match the snapshot', () => {
    expect(WebhookModel.schema).toMatchSnapshot()
  })

  it('should define a valid schema', () => {
    expect(WebhookModel.schema).to.be.validJsonSchema
  })

  it('should filter out invalid properties', () => {
    const invalidWebhookRequest = merge({}, WEBHOOK_MOCK, {
      foo: 'bar',
      bar: 'foo',
    })

    const webhook = new WebhookModel(invalidWebhookRequest)
    const actualWebhookRequest = webhook.request()

    expect(actualWebhookRequest).to.deep.equal(WEBHOOK_MOCK)
  })
})
