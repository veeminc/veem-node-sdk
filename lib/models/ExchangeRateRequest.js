import Schema from './Schema'

class ContactRequest extends Schema {}

ContactRequest.schema = {
  title: 'ContactRequest',
  type: 'object',
  properties: {
    fromAmount: {
      type: 'string',
    },
    fromCurrency: {
      type: 'string',
    },
    recipientAccountEmail: {
      type: 'string',
    },
    toAmount: {
      type: 'string',
    },
    toCountry: {
      type: 'string',
    },
    toCurrency: {
      type: 'string',
    },
  },
}

export default ContactRequest
