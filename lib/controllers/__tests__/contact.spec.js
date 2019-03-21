import nock from 'nock'
import sinon from 'sinon'
import uniqueId from 'lodash/uniqueid'
import merge from 'lodash/merge'
import first from 'lodash/first'
import size from 'lodash/size'
import VeemSDK from '../..'

const CONTACT_ID = 1234
const CONTACT_BATCH_ID = 123

describe('Contact Controller', () => {
  const scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  let contactController

  beforeAll(() => {
    contactController = new VeemSDK({}).contact
  })

  afterAll(() => {
    scope.cleanAll()
    scope.enableNetConnect()
  })

  describe('list', () => {
    const callback = sinon.spy()

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
        totalElements: size(contacts),
        totalPages: 1,
        numberOfElements: size(contacts),
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
    const callback = sinon.spy()

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

  describe('getBatch', () => {
    const callback = sinon.spy()

    const response = {
      batchId: CONTACT_BATCH_ID,
      totalItems: 2,
      processedItems: 2,
      hasErrors: false,
      batchItems: [
        {
          batchItemId: 1,
          status: 'InProgress',
          errorInfo: null,
          accountId: null,
        },
        {
          batchItemId: 2,
          status: 'InProgress',
          errorInfo: null,
          accountId: null,
        },
      ],
      status: 'Completed',
    }

    beforeAll(async () => {
      scope
        .get(`/contacts/batch/${CONTACT_BATCH_ID}`)
        .reply(200, response)

      await contactController.getBatch(CONTACT_BATCH_ID, callback)
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
    const callback = sinon.spy()

    const contacts = [
      {
        batchItemId: 1,
        businessName: 'BName',
        email: 'test+contact1@domain.com',
        firstName: 'Fname',
        lastName: 'LName',
        isoCountryCode: 'US',
        dialCode: '+1',
        phoneNumber: '613-204-1854',
      },
      {
        batchItemId: 2,
        businessName: 'BName2',
        email: 'test+contact2@domain.com',
        firstName: 'Fname',
        lastName: 'LName',
        isoCountryCode: 'US',
        dialCode: '+1',
        phoneNumber: '613-204-1855',
      },
    ]

    describe('singular', () => {
      const contact = first(contacts)

      const response = merge({}, contact, {
        id: uniqueId(),
        contactAccountId: uniqueId(),
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

    describe('batch', () => {
      const response = {
        batchId: uniqueId(),
        totalItems: size(contacts),
        processedItems: 0,
        hasErrors: false,
        status: 'InProgress',
      }

      beforeAll(async () => {
        scope
          .post('/contacts/batch')
          .reply(200, response)

        await contactController.create(contacts, callback)
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
})
