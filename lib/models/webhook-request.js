import Schema from './schema'

class WebhookRequest extends Schema {}

WebhookRequest.schema = {
  title: 'WebhookRequest',
  type: 'object',
  properties: {
    callbackUrl: {
      type: 'string',
    },
    event: {
      type: 'string',
    },
  },
}

export default WebhookRequest
