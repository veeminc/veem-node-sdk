class Attachment {
  constructor (data) {
    this.data = data
    this.schema = Attachment.schema
  }
}

Attachment.schema = {
  title: 'Attachment',
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    referenceId: {
      type: 'string',
    },
  },
}

export default Attachment
