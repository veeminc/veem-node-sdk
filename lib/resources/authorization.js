import get from 'lodash/get'

class Authorization {
  constructor (client) {
    this.client = client
  }

  generate (options, callback) {
    const ApiClient = new this.client.api.ApiClient()
    const { clientId, clientSecret } = get(this.client, 'configuration')

    const pathParams = {}
    const queryParams = {}
    const collectionQueryParams = {}
    const basicCredentials = Buffer.from(`${clientId}:${clientSecret}`)
    const basicCredentialsString = basicCredentials.toString('base64')

    const headerParams = {
      Authorization: `Basic ${basicCredentialsString}`,
    }

    const formParams = {
      scope: 'all',
      grant_type: 'client_credentials',
    }

    const postBody = null
    const authNames = ['OAuth2']
    const contentTypes = ['application/x-www-form-urlencoded']
    const accepts = ['application/json']
    const returnType = 'json'

    ApiClient.callApi(
      '/oauth/token',
      'POST',
      pathParams,
      queryParams,
      collectionQueryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback,
    )
  }
}

export default Authorization
