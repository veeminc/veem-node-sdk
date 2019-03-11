import trim from 'lodash/trim'

function buildUrl (base, path) {
  var cleanedPath = trim(path, '/')
  var url = `https://${base}/${cleanedPath}`

  return url
}

module.exports = buildUrl
