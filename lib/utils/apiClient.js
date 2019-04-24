import superagent from 'superagent'
import uniqueId from 'lodash/uniqueId'
import set from 'lodash/set'
import isFile from './isFile'
import buildUrl from './buildUrl'
import { GET } from 'constants/httpMethods'
import { SANDBOX, ENVIRONMENTS_CONFIG } from 'constants/environments'

import {
  JSON as CONTENT_TYPE_JSON,
  FORM_DATA as CONTENT_TYPE_FORM_DATA,
} from 'constants/contentType'

import {
  JSON as ACCEPTS_JSON,
  OCTET_STREAM as ACCEPTS_OCTET_STREAM,
} from 'constants/accepts'

const DEFAULT_ENVIRONMENT = SANDBOX

const DEFAULT_REQUEST_HEADER_OPTIONS = {
  Accept: ACCEPTS_JSON,
  'Content-Type': CONTENT_TYPE_JSON,
}

class ApiClient {
  constructor (environment = DEFAULT_ENVIRONMENT) {
    const environmentConfig = ENVIRONMENTS_CONFIG[environment] || ENVIRONMENTS_CONFIG[DEFAULT_ENVIRONMENT]

    this.basePath = environmentConfig.basePath
    this.accessToken = null

    this.buildUrl = buildUrl
    this.isFile = isFile
  }

  call ({
    method = GET,
    path = null,
    requestHeaderOptions = {},
    queries = {},
    payload = null,
  }, callback) {
    return new Promise((resolve, reject) => {
      const apiUrl = this.buildUrl(this.basePath, path)
      const request = superagent(method, apiUrl)

      const computedRequestHeaderOptions = Object.assign(
        {
          'X-Request-ID': uniqueId(Date.now()),
        },
        DEFAULT_REQUEST_HEADER_OPTIONS,
        requestHeaderOptions,
      )

      this.accessToken && set(computedRequestHeaderOptions, 'Authorization', `Bearer ${this.accessToken}`)

      const isMultipartFormData = computedRequestHeaderOptions['Content-Type'] === CONTENT_TYPE_FORM_DATA
      const acceptsStream = computedRequestHeaderOptions['Accept'] === ACCEPTS_OCTET_STREAM

      request
        .query(queries)
        .set(computedRequestHeaderOptions)

      if (isMultipartFormData) {
        const payloadKeys = Object.keys(payload)

        payloadKeys.forEach((key) => {
          const field = payload[key]

          if (this.isFile(field)) {
            request.attach(key, field)
          } else {
            request.field(key, field)
          }
        })
      } else {
        request.send(payload)
      }

      if (acceptsStream) request.buffer()

      request.end((error, response) => {
        const hasError = !!error

        callback && callback(error, response.body, response)
        hasError ? reject(error) : resolve(response.body)
      })
    })
  }
}

export default ApiClient
