/**
 * api鉴权中间件
 * 某些敏感的api，比如发短信、登录，需要加密时可以使用该中间件
 */

const crypto = require('../lib/crypto')
const SECRET = process.env.SECRET

function verifyMiddleware (req, res, next) {
  const { sign, timestamp } = req.query
  // 加密算法与请求时的一致
  const _sign = crypto(`timestamp=${timestamp}&secret=${SECRET}`)
  if (_sign === sign) {
    next()
  } else {
    res.status(401).send({
      message: 'invalid token'
    })
  }
}

module.exports = { verifyMiddleware }
