var BankAccount = require('./bank-account')
var Address = require('./address')
var filter = require('uber-json-schema-filter')

function Contact(data) {
  this.data = data
}

Contact.prototype.schema = {
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
      properties: BankAccount.prototype.schema.properties,
    },
    businessAddress: {
      type: 'object',
      properties: Address.prototype.schema.properties,
    },
  },
}

Contact.prototype.request = function () {
  return filter(this.schema, this.data)
}

module.exports = Contact
