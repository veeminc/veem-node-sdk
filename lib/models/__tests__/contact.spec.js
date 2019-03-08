import ContactModel from '../contact'
import uniqueId from 'lodash.uniqueid'
import merge from 'lodash.merge'
import moment from 'moment'
import CONTACT_MOCK from './__mocks__/contact'

describe('Contact Model', () => {
  it('should match the snapshot', () => {
    expect(ContactModel.prototype.schema).toMatchSnapshot()
  })

  it('should filter out invalid properties', () => {
    const invalidContactRequest = merge({}, CONTACT_MOCK, {
      foo: 'bar',
      amount: {
        foo: 'bar',
      },
      payee: {
        foo: 'bar',
      },
    })

    const contact = new ContactModel(invalidContactRequest)
    const actualContactRequest = contact.request()

    expect(actualContactRequest).to.deep.equal(CONTACT_MOCK)
  })
})
