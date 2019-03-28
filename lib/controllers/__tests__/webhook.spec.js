import nock from 'nock'
import sinon from 'sinon'
import uniqueId from 'lodash/uniqueid'
import VeemSDK from 'VeemSDK'

describe('Webhook Controller', () => {
  const scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  let webhookController

  beforeAll(() => {
    webhookController = new VeemSDK({}).webhook
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
      callbackUrl: 'http://www.testcallbackurl.com',
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

  describe('list', () => {
    const callback = sinon.spy()

    const response = [
      {
        id: uniqueId(),
        callbackUrl: 'http://www.testcallbackurl.com',
        event: 'testEvent',
        status: 'Active',
      },
      {
        id: uniqueId(),
        callbackUrl: 'http://www.testcallbackurl2.com',
        event: 'testEvent2',
        status: 'Active',
      },
    ]

    beforeAll(async () => {
      scope
        .get(`/webhooks`)
        .reply(200, response)

      await webhookController.list(callback)
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
