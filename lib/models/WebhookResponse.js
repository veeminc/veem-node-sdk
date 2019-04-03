import Schema from './Schema'

class WebhookResponse extends Schema {}

WebhookResponse.schema = {
  title: 'WebhookResponse',
  type: 'object',
  properties: {
    callbackUrl: {
      type: 'string',
    },
    event: {
      type: 'string',
    },
    id: {
      type: 'number',
    },
    status: {
      type: 'string',
    },
  },
}

export default WebhookResponse
