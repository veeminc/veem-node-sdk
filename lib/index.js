import Client from './client'
import merge from 'lodash/merge'

const defaultConfiguration = {
  type: 'oauth2',
  accessToken: null,
}

const VeemSDK = params => {
  const configuration = merge({}, defaultConfiguration, params)

  return new Client(configuration)
}

export default VeemSDK
