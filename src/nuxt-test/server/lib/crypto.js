const sha256 = require('crypto-js/sha256')
const Base64 = require('crypto-js/enc-base64')

function crypto (str) {
  const _sign = sha256(str)
  return encodeURIComponent(Base64.stringify(_sign))
}

module.exports = crypto
