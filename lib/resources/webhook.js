import { GET } from 'constants/http-methods'

class Webhook {
  constructor (apiClient) {
    this.apiClient = apiClient
  }

  get (webhookId, callback) {
    return this.apiClient.call({
      method: GET,
      path: `/veem/v1.1/webhooks/${webhookId}`,
    }, callback)
  }
}

export default Webhook
