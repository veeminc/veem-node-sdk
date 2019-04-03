import Schema from './Schema'

class AttachmentRequest extends Schema {}

AttachmentRequest.schema = {
  title: 'AttachmentRequest',
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

export default AttachmentRequest
