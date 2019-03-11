import BankAccount from './bank-account'
import Address from './address'
import filter from 'uber-json-schema-filter'

class Contact {
  constructor (data) {
    this.data = data
    this.schema = Contact.schema
  }

  request () {
    return filter(this.schema, this.data)
  }
}

Contact.schema = {
  title: 'Contact',
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    isoCountryCode: {
      type: 'string',
    },
    phoneDialCode: {
      type: 'string',
    },
    type: {
      type: 'string',
      enum: [
        'Incomplete',
        'Business',
        'Personal',
      ],
    },
    businessName: {
      type: 'string',
    },
    externalBusinessId: {
      type: 'number',
    },
    bankAccount: {
      type: 'object',
      properties: BankAccount.schema.properties,
    },
    businessAddress: {
      type: 'object',
      properties: Address.schema.properties,
    },
  },
}

export default Contact
