import assign from 'lodash/assign'
import Schema from 'models/Schema'

Schema.schema = {
  title: 'Invoice',
  type: 'object',
  properties: {
    foo: {
      type: 'string',
    },
  },
}

describe('Schema', () => {
  const VALID_DATA = {
    foo: 'bar',
  }

  const INVALID_DATA = assign({}, VALID_DATA, {
    foo: false,
  })

  const INVALID_PROPERTIES_DATA = assign({}, VALID_DATA, {
    hello: 'world',
  })

  describe('validate', () => {
    it('should pass on a valid schema', () => {
      expect(Schema.validate(VALID_DATA)).to.be.true
    })

    it('should fail on an invalid schema', () => {
      expect(Schema.validate(INVALID_DATA)).to.be.false
    })
  })

  describe('filter', () => {
    it('should filter out invalid properties', () => {
      const actualPaymentRequest = Schema.filter(INVALID_PROPERTIES_DATA)

      expect(actualPaymentRequest).to.deep.equal(VALID_DATA)
    })
  })
})
