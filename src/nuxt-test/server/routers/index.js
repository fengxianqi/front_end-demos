const { Router } = require('express')
const { verifyMiddleware } = require('../middleware/verify.js')
const router = Router()

router.get('/test', function (req, res, next) {
  res.json({ name: 'test' })
})

router.get('/test2', verifyMiddleware, function (req, res, next) {
  res.json({ name: '需要鉴权的api' })
})

module.exports = router
