function isFile (param) {
  // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
  if (typeof require === 'function') {
    var fs

    try {
      fs = require('fs')
    } catch (err) {}

    if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
      return true
    }
  }

  // Buffer in Node.js
  if (typeof Buffer === 'function' && param instanceof Buffer) {
    return true
  }

  // Blob in browser
  if (typeof Blob === 'function' && param instanceof Blob) {
    return true
  }

  // File in browser (it seems File object is also instance of Blob, but keep this for safe)
  if (typeof File === 'function' && param instanceof File) {
    return true
  }

  return false
}

module.exports = isFile
