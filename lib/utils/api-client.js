import superagent from 'superagent'
import uniqueId from 'lodash/uniqueId'
import isFile from './is-file'
import buildUrl from './build-url'
import { GET } from 'constants/http-methods'
import { JSON as CONTENT_TYPE_JSON, FORM_DATA as CONTENT_TYPE_FORM_DATA } from 'constants/content-type'
import { JSON as ACCEPTS_JSON } from 'constants/accepts'

const DEFAULT_ENVIRONMENT = 'sandbox'

const ENVIRONMENT_CONFIG = {
  sandbox: {
    basePath: 'sandbox-api.veem.com',
  },
}

const DEFAULT_REQUEST_HEADER_OPTIONS = {
  Accept: ACCEPTS_JSON,
  'Content-Type': CONTENT_TYPE_JSON,
}

class ApiClient {
  constructor (environment = DEFAULT_ENVIRONMENT) {
    const environmentConfig = ENVIRONMENT_CONFIG[environment] || ENVIRONMENT_CONFIG[DEFAULT_ENVIRONMENT]

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
    const _this = this

    return new Promise((resolve, reject) => {
      const apiUrl = _this.buildUrl(_this.basePath, path)
      const request = superagent(method, apiUrl)

      const computedRequestHeaderOptions = Object.assign(
        {
          'X-Request-ID': uniqueId(Date.now()),
        },
        DEFAULT_REQUEST_HEADER_OPTIONS,
        requestHeaderOptions,
        {
          Authorization: `Bearer ${_this.accessToken}`,
        }
      )

      const isMultipartFormData = computedRequestHeaderOptions['Content-Type'] === CONTENT_TYPE_FORM_DATA

      request
        .query(queries)
        .set(computedRequestHeaderOptions)

      if (isMultipartFormData) {
        const payloadKeys = Object.keys(payload)

        payloadKeys.forEach(function (key) {
          const field = payload[key]

          if (_this.isFile(field)) {
            request.attach(key, field)
          } else {
            request.field(key, field)
          }
        })
      } else {
        request.send(payload)
      }

      request.end((error, response) => {
        const hasError = !!error

        callback && callback(error, response.text, response)

        hasError ? reject(error, response) : resolve(response.text, response)
      })
    })
  }
}

export default ApiClient
