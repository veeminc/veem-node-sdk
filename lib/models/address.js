function Address(data) {
  this.data = data
}

Address.prototype.schema = {
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

module.exports = Address
