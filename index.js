var Client = require('./client')

var defaultConfiguration = {
  type: 'oauth2',
  accessToken: null,
}

function VeemSDK(params) {
  this.configuration = Object.assign({}, defaultConfiguration, params)

  return new Client(this.configuration)
}

module.exports = VeemSDK
