import nock from 'nock'
import sinon from 'sinon'
import moment from 'moment'
import uniqueId from 'lodash.uniqueid'
import CustomerController from '../customer'
import ApiClient from 'utils/api-client'

const EMAIL = 'test@domain.com'

describe('Customer Controller', () => {
  const apiClient = new ApiClient()

  let contactController
  let scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  beforeAll(() => {
    contactController = new CustomerController(apiClient)
  })

  afterAll(() => {
    scope.cleanAll()
    scope.enableNetConnect()
  })

  describe('list', () => {
    let callback = sinon.spy()

    const customer = [
      {
       id: 6371,
       firstName: 'FName',
       lastName: 'LName',
       name: 'BName',
       email: EMAIL,
       isContact: false,
       isoCountryCode: 'US',
     },
    ]

    beforeAll(async () => {
      const response = {
        totalElements: 1,
        totalPages: 1,
        numberOfElements: 1,
        number: 0,
        size: 20,
        first: true,
        last: true,
        sort: null,
        content: customer,
      }

      scope
        .get('/customers')
        .query({
          email: EMAIL,
        })
        .reply(200, response)

      await contactController.list(EMAIL, callback)
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
})
