import { GET } from 'constants/http-methods'

class Webhook {
  constructor (sdk) {
    this.sdk = sdk
  }

  get (webhookId, callback) {
    return this.sdk.apiClient.call({
      method: GET,
      path: `/veem/v1.1/webhooks/${webhookId}`,
    }, callback)
  }

  list (callback) {
    return this.sdk.apiClient.call({
      method: GET,
      path: `/veem/v1.1/webhooks`,
    }, callback)
  }
}

export default Webhook
