function Metadata (client) {
  this.client = client
  this.metaController = new this.client.api.MetaControllerApi()
}

Metadata.prototype.getCountryCurrencyMap = function(callback) {
  return new Promise((resolve, reject) => {
    this.metaController.getCountryCurrencyMap(null, (...args) => {
      callback && callback(...args)
      const error = !!args[0]

      if (error) {
        reject(...args)
      } else {
        resolve(...args)
      }
    })
  })
}

module.exports = Metadata
