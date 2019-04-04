class Address {
  constructor (data) {
    this.data = data
    this.schema = Address.schema
  }
}

Address.schema = {
  title: 'Address',
  type: 'object',
  properties: {
    city: {
      type: 'string',
    },
    line1: {
      type: 'string',
    },
    line2: {
      type: 'string',
    },
    postalCode: {
      type: 'string',
    },
    stateProvince: {
      type: 'string',
    },
  },
}

export default Address
