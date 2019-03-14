import nock from 'nock'
import sinon from 'sinon'
import uniqueId from 'lodash/uniqueid'
import assign from 'lodash/assign'
import ContactController from 'controllers/contact'
import ApiClient from 'utils/api-client'

const CONTACT_ID = 1234

describe('Contact Controller', () => {
  const apiClient = new ApiClient()
  const scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  let contactController

  beforeAll(() => {
    contactController = new ContactController(apiClient)
  })

  afterAll(() => {
    scope.cleanAll()
    scope.enableNetConnect()
  })

  describe('list', () => {
    let callback = sinon.spy()

    const contacts = [
      {
        id: 1454,
        businessName: 'BName',
        contactAccountId: 6709,
        email: 'test+contact1@domain.com',
        firstName: 'Fname',
        lastName: 'LName',
        isoCountryCode: 'US',
        dialCode: '+1',
        phoneNumber: '613-204-1854',
      },
      {
        id: 1455,
        businessName: 'BName2',
        contactAccountId: 6710,
        email: 'test+contact2@domain.com',
        firstName: 'Fname',
        lastName: 'LName',
        isoCountryCode: 'US',
        dialCode: '+1',
        phoneNumber: '613-204-1855',
      },
    ]

    beforeAll(async () => {
      const response = {
        totalElements: 2,
        totalPages: 1,
        numberOfElements: 2,
        number: 0,
        size: 20,
        first: true,
        last: true,
        sort: null,
        content: contacts,
      }

      scope
        .get('/contacts')
        .reply(200, response)

      await contactController.list(callback)
    })

    afterAll(() => {
      callback.resetHistory()
    })

    it('should call the API', () => {
      expect(scope).to.have.been.requested
    })

    it('should execute the callback', () => {
      expect(callback).to.have.been.called
    })
  })

  describe('get', () => {
    let callback = sinon.spy()

    const response = {
      id: 1454,
      businessName: 'BName',
      contactAccountId: 6709,
      email: 'test+contact1@domain.com',
      firstName: 'Fname',
      lastName: 'LName',
      isoCountryCode: 'US',
      dialCode: '+1',
      phoneNumber: '613-204-1854',
    }

    beforeAll(async () => {
      scope
        .get(`/contacts/${CONTACT_ID}`)
        .reply(200, response)

      await contactController.get(CONTACT_ID, callback)
    })

    afterAll(() => {
      callback.resetHistory()
    })

    it('should execute the callback', () => {
      expect(callback).to.have.been.called
    })

    it('should call the API', () => {
      expect(scope).to.have.been.requested
    })
  })

  describe('create', () => {
    let callback = sinon.spy()

    const contact = {
      businessName: 'BName',
      contactAccountId: 6709,
      email: 'test+contact1@domain.com',
      firstName: 'Fname',
      lastName: 'LName',
      isoCountryCode: 'US',
      dialCode: '+1',
      phoneNumber: '613-204-1854',
    }

    const response = assign({}, contact, {
      id: uniqueId(),
    })

    beforeAll(async () => {
      scope
        .post('/contacts')
        .reply(200, response)

      await contactController.create(contact, callback)
    })

    afterAll(() => {
      callback.resetHistory()
    })

    it('should execute the callback', () => {
      expect(callback).to.have.been.called
    })

    it('should call the API', () => {
      expect(scope).to.have.been.requested
    })
  })
})