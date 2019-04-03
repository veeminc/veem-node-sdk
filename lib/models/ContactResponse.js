import Schema from './Schema'
import BankAccount from './BankAccount'
import Address from './address'

class ContactResponse extends Schema {}

ContactResponse.schema = {
  title: 'ContactResponse',
  type: 'object',
  properties: {
    bankAccount: {
      type: 'object',
      properties: BankAccount.schema.properties,
    },
    businessAddress: {
      type: 'object',
      properties: Address.schema.properties,
    },
    businessName: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    externalBusinessId: {
      type: 'string',
    },
    firstName: {
      type: 'string',
    },
    isoCountryCode: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    phoneDialCode: {
      type: 'string',
    },
    phoneNumber: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
  },
}

export default ContactResponse
