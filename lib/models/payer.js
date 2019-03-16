class Payer {
  constructor (data) {
    this.data = data
    this.schema = Payer.schema
  }
}

Payer.schema = {
  title: 'Payer',
  type: 'object',
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

export default Payer
