import nock from 'nock'
import sinon from 'sinon'
import WebhookController from 'controllers/webhook'
import ApiClient from 'utils/api-client'

describe('Webhook Controller', () => {
  const apiClient = new ApiClient()
  const scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  let webhookController

  beforeAll(() => {
    webhookController = new WebhookController(apiClient)
  })

  afterAll(() => {
    scope.cleanAll()
    scope.enableNetConnect()
  })

  describe('get', () => {
    const callback = sinon.spy()

    const webhookId = 123

    const response = {
      id: webhookId,
      callbackUrl: 'www.testcallbackurl.com',
      event: 'testEvent',
      status: 'Active',
    }

    beforeAll(async () => {
      scope
        .get(`/webhooks/${webhookId}`)
        .reply(200, response)

      await webhookController.get(webhookId, callback)
    })

    afterAll(() => {
      callback.resetHistory()
    })

    it('should call the API', () => {
      expect(scope).to.have.been.requested
    })

    it('should execute the callback', () => {
      expect(callback).to.have.been.called
    })
  })
})
