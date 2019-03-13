import filter from 'uber-json-schema-filter'

class Webhook {
  constructor (data) {
    this.data = data
    this.schema = Webhook.schema
  }

  request () {
    return filter(this.schema, this.data)
  }
}

Webhook.schema = {
  title: 'Webhook',
  type: 'object',
  properties: {
    callbackUrl: {
      type: 'string',
    },
    event: {
      type: 'string',
    },
    status: {
      type: 'string',
      enum: [
        'Active',
      ],
    },
  },
}

export default Webhook
