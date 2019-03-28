import omit from 'lodash/omit'
import chai from 'chai'
import chaiRequest from '../chai-request'

const PAGED_RESPONSE_BODY = {
  content: [],
  totalElements: 0,
  last: true,
  totalPages: 1,
  sort: null,
  size: 1,
  number: 1,
  first: true,
  numberOfElements: 0,
}

const BATCH_RESPONSE_BODY = {
  batchId: 169,
  totalItems: 2,
  processedItems: 0,
  hasErrors: false,
  batchItems: [
    {
      batchItemId: 1,
      status: 'InProgress',
      errorInfo: null,
      paymentId: null,
    },
    {
      batchItemId: 2,
      status: 'InProgress',
      errorInfo: null,
      paymentId: null,
    },
  ],
  status: 'InProgress',
}

describe('chai-request', () => {
  beforeAll(() => {
    chai.use(chaiRequest)
  })

  describe('pagedResponseBody', () => {
    describe('on a valid page response body', () => {
      it('should return true', () => {
        expect(PAGED_RESPONSE_BODY).to.be.a.pagedResponseBody()
      })
    })

    describe('on an invalid paged response body', () => {
      const invalidPagedResponseBody = omit(PAGED_RESPONSE_BODY, 'totalPages')

      it('should return false', () => {
        expect(invalidPagedResponseBody).to.not.be.a.pagedResponseBody()
      })
    })
  })

  describe('batchResponseBody', () => {
    describe('on a valid page response body', () => {
      it('should return true', () => {
        expect(BATCH_RESPONSE_BODY).to.be.a.batchResponseBody()
      })
    })

    describe('on an invalid paged response body', () => {
      const invalidBatchResponseBody = omit(BATCH_RESPONSE_BODY, 'processedItems')

      it('should return false', () => {
        expect(invalidBatchResponseBody).to.not.be.a.batchResponseBody()
      })
    })
  })
})
