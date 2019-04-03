import nock from 'nock'
import sinon from 'sinon'
import VeemSDK from 'VeemSDK'

describe('Metadata Controller', () => {
  const scope = nock('https://sandbox-api.veem.com/veem/public/v1.1/')

  let metadataController

  beforeAll(() => {
    metadataController = new VeemSDK().metadata
  })

  afterAll(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })

  describe('getCountryCurrencyMap', () => {
    let callback = sinon.spy()

    const response = {
      0: {
        country: 'AE',
        countryName: 'United Arab Emirates',
        sendingCurrencies: [],
        receivingCurrencies: [ 'AED', 'EUR', 'GBP', 'USD' ],
        purposeOfPaymentRequired: true,
        invoiceAttachmentRequired: false,
      },
      1: {
        country: 'AL',
        countryName: 'Albania',
        sendingCurrencies: [],
        receivingCurrencies: [ 'ALL', 'USD' ],
        purposeOfPaymentRequired: false,
        invoiceAttachmentRequired: false,
      },
      '2': {
        country: 'AM',
        countryName: 'Armenia',
        sendingCurrencies: [],
        receivingCurrencies: [ 'AMD', 'USD' ],
        purposeOfPaymentRequired: false,
        invoiceAttachmentRequired: false,
      },
    }

    beforeAll(async () => {
      scope
        .get('/country-currency-map')
        .query(true)
        .reply(200, response)

      await metadataController.getCountryCurrencyMap(null, callback)
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

  describe('getErrorCodes', () => {
    let callback = sinon.spy()

    const response = [
      {
        errorCode: 50001001,
        errorMessage: 'The request body is missing for %s',
      },
      {
        errorCode: 50001002,
        errorMessage: 'The field %s should not be blank or null',
      },
      {
        errorCode: 50001003,
        errorMessage: 'X-REQUEST-ID header required',
      },
      {
        errorCode: 50001004,
        errorMessage: 'Duplicate composite key (request id, client id) found',
      },
      {
        errorCode: 50001005,
        errorMessage: 'Contact ID parameter not specified',
      },
    ]

    beforeAll(async () => {
      scope
        .get('/errorcodes')
        .reply(200, response)

      await metadataController.getErrorCodes(callback)
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
