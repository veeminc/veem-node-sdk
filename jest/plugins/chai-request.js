import { struct } from 'superstruct'

const PagedResponseBodyTemplate = struct({
  content: 'array',
  totalElements: 'number',
  last: 'boolean',
  totalPages: 'number',
  sort: 'null',
  size: 'number',
  number: 'number',
  first: 'boolean',
  numberOfElements: 'number',
})

const BatchResponseBodyTemplate = struct({
  batchId: 'number',
  totalItems: 'number',
  processedItems: 'number',
  hasErrors: 'boolean',
  status: 'string',
  batchItems: 'array',
})

const isPagedResponseBody = (reponseBody) => {
  try {
    PagedResponseBodyTemplate(reponseBody)
  } catch (e) {
    return false
  }

  return true
}

const isBatchResponseBody = (responseBody) => {
  try {
    BatchResponseBodyTemplate(responseBody)
  } catch (e) {
    return false
  }

  return true
}

const plugin = (chai) => {
  chai.Assertion.addMethod('pagedResponseBody', function (value) {
    this.assert(
      isPagedResponseBody(this._obj, value),
      `expected #{this} to be a paged response body`,
      `expected #{this} not to be a paged response body`
    )
  })

  chai.Assertion.addMethod('batchResponseBody', function (value) {
    this.assert(
      isBatchResponseBody(this._obj, value),
      `expected #{this} to be a batch response body`,
      `expected #{this} not to be a batch response body`
    )
  })
}

export default plugin
