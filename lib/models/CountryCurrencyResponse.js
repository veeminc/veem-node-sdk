import Schema from './Schema'

class ContactResponse extends Schema {}

ContactResponse.schema = {
  title: 'ContactResponse',
  type: 'object',
  properties: {
    country: {
      type: 'string',
    },
    countryName: {
      type: 'string',
    },
    sendingCurrencies: {
      type: 'array',
    },
    receivingCurrencies: {
      type: 'array',
    },
    purposeOfPaymentRequired: {
      type: 'boolean',
    },
    invoiceAttachmentRequired: {
      type: 'boolean',
    },
    purposeOfPaymentInfo: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          countryCode: {
            type: 'string',
          },
          purposeCode: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
        },
      },
    },
  },
}

export default ContactResponse
