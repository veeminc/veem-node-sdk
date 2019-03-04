function Payer(data) {
  this.data = data
}

Payer.prototype.schema = {
  title: 'Payer',
  type: 'Object',
  properties: {
    businessName: {
      type: 'string',
    },
    countryCode: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    firstName: {
      type: 'string',
    },
    lastName: {
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
    phone: {
      type: 'string',
    },
  },
}

module.exports = Payer
