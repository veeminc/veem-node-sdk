import CONFIG from '../config'
import Webhook from 'models/webhook'
import every from 'lodash/every'
import first from 'lodash/first'
import VeemSDK from 'VeemSDK'

xdescribe('webhook', () => {
  const veemSDK = new VeemSDK(CONFIG)

  describe('webhook.list', () => {
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.webhook.list()
    })

    it('should return a list of Webhook models', () => {
      const isEveryResourceWebhookModel = every(responseBody, resource => Webhook.response.validate(resource))

      expect(isEveryResourceWebhookModel).to.be.true
    })
  })

  describe('webhook.get', () => {
    let responseBody

    beforeAll(async () => {
      const webhooks = await veemSDK.webhook.list()
      const webhook = first(webhooks)

      responseBody = await veemSDK.webhook.get(webhook.id)
    })

    it('should return a Webhook model', () => {
      const isWebhookResponseModelValid = Webhook.response.validate(responseBody)

      expect(isWebhookResponseModelValid).to.be.true
    })
  })
})
