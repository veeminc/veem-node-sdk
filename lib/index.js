import Client from './client'
import merge from 'lodash/merge'
import { SANDBOX } from 'constants/environments'

const defaultConfiguration = {
  type: 'oauth2',
  accessToken: null,
  environment: SANDBOX,
}

class VeemSDK {
  constructor (params) {
    const configuration = merge({}, defaultConfiguration, params)

    return new Client(configuration)
  }
}

export default VeemSDK
