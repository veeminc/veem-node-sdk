import Schema from './Schema'

class ContactRequest extends Schema {}

ContactRequest.schema = {
  title: 'ContactRequest',
  type: 'object',
  properties: {
    batchItemId: {
      type: 'number',
    },
    businessName: {
      type: 'string',
    },
    contactAccountId: {
      type: 'number',
    },
    dialCode: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    firstName: {
      type: 'string',
    },
    id: {
      type: 'number',
    },
    isoCountryCode: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    phoneNumber: {
      type: 'string',
    },
  },
}

export default ContactRequest
