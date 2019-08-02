import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64'

export default function (str) {
  const _sign = sha256(str)
  return encodeURIComponent(Base64.stringify(_sign))
}
