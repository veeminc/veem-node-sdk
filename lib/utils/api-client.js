import superagent from 'superagent'
import trim from 'lodash/trim'
import uniqueId from 'lodash/uniqueId'
import merge from 'lodash/merge'
import keys from 'lodash/keys'
import forEach from 'lodash/forEach'
import HTTP_METHODS from '../constants/http-methods'

const DEFAULT_ENVIRONMENT = 'sandbox'

const ENVIRONMENT_CONFIG = {
  sandbox: {
    basePath: 'sandbox-api.veem.com',
  },
}

const DEFAULT_REQUEST_HEADER_OPTIONS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

class ApiClient {
  constructor (environment = DEFAULT_ENVIRONMENT) {
    const environmentConfig = ENVIRONMENT_CONFIG[environment] ||
      ENVIRONMENT_CONFIG[DEFAULT_ENVIRONMENT]

    this.basePath = environmentConfig.basePath
    this.accessToken = null
  }

  buildUrl (path) {
    const cleanedPath = trim(path, '/')
    const url = `https://${this.basePath}/${cleanedPath}`

    return url
  }

  call ({
    method = HTTP_METHODS.GET,
    path = null,
    requestHeaderOptions = {},
    queries = {},
    payload = null,
  }, callback) {
    return new Promise((resolve, reject) => {
      const apiUrl = this.buildUrl(path)
      const request = superagent(method, apiUrl)

      const computedRequestHeaderOptions = merge(
        {
          'X-Request-ID': uniqueId(Date.now()),
        },
        DEFAULT_REQUEST_HEADER_OPTIONS,
        requestHeaderOptions,
        {
          Authorization: `Bearer ${this.accessToken}`,
        }
      )

      request
        .query(queries)
        .send(payload)

      const requestHeaderOptionKeys = keys(computedRequestHeaderOptions)

      forEach(requestHeaderOptionKeys, headerOptionKey => {
        request.set(headerOptionKey, computedRequestHeaderOptions[headerOptionKey])
      })

      request.end((error, response) => {
        const hasError = !!error

        callback && callback(error, response.text, response)

        hasError
          ? reject(error, response)
          : resolve(response.text, response)
      })
    })
  }
}

export default ApiClient
