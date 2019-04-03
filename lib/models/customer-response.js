import Schema from './schema'

class CustomerResponse extends Schema {}

CustomerResponse.schema = {
  title: 'CustomerResponse',
  type: 'object',
  properties: {
    id: {
      type: 'number',
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    isoCountryCode: {
      type: 'string',
    },
    isContact: {
      type: 'boolean',
    },
  },
}

export default CustomerResponse
