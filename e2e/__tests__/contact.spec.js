import CONFIG from '../config'
import VeemSDK from 'VeemSDK'
import every from 'lodash/every'
import map from 'lodash/map'
import assign from 'lodash/assign'
import uniqueId from 'lodash/uniqueId'
import Contact from 'models/contact'
import generateEmail from 'random-email'

const CONTACT = {
  firstName: 'FName1',
  lastName: 'LName1',
  isoCountryCode: 'US',
  phoneDialCode: '+1',
  phoneNumber: '6132451245',
  businessName: 'BName1',
  email: 'base.email@example.com',
}

const CONTACTS = [
  {
    ...CONTACT,
    batchItemId: uniqueId(),
  },
  {
    ...CONTACT,
    batchItemId: uniqueId(),
  },
]

describe('contact', () => {
  const veemSDK = new VeemSDK(CONFIG)

  describe('contact.create', () => {
    let responseBody

    const contactPayload = assign({}, CONTACT, {
      email: generateEmail({ domain: 'example.com' }),
    })

    beforeAll(async () => {
      responseBody = await veemSDK.contact.create(contactPayload)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a Contact model', () => {
      const isContactResponseModelValid = Contact.response.validate(responseBody)

      expect(isContactResponseModelValid).to.be.true
    })
  })

  describe('contact.list', () => {
    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.contact.list()
    })

    it('should return a pagedResponseBody', async () => {
      expect(responseBody).to.be.a.pagedResponseBody()
    })

    it('should return a list of Payment models', () => {
      const isEveryResourcePaymentModel = every(responseBody.content, resource => Contact.response.validate(resource))

      expect(isEveryResourcePaymentModel).to.be.true
    })
  })

  describe('contact.get', () => {
    let responseBody

    const contactPayload = assign({}, CONTACT, {
      email: generateEmail({ domain: 'example.com' }),
    })

    beforeAll(async () => {
      const contact = await veemSDK.contact.create(contactPayload)
      responseBody = await veemSDK.contact.get(contact.id)
    })

    it('should not return a pagedResponseBody', () => {
      expect(responseBody).to.not.be.a.pagedResponseBody()
    })

    it('should return a contact model', () => {
      const isContactResponseModelValid = Contact.response.validate(responseBody)

      expect(isContactResponseModelValid).to.be.true
    })
  })

  describe('contact.getBatch', () => {
    let responseBody

    const contactsPayload = map(CONTACTS, contact => ({
      ...contact,
      email: generateEmail({ domain: 'example.com' }),
    }))

    beforeAll(async () => {
      const batchResponseBody = await veemSDK.contact.create(contactsPayload)
      responseBody = await veemSDK.contact.getBatch(batchResponseBody.batchId)
    })

    it('should return a batch response body', () => {
      expect(responseBody).to.be.a.batchResponseBody()
    })
  })
})
