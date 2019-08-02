import axios from 'axios'
import crypto from '~/plugins/crypto'

const SECRET = process.env.SECRET

const options = {
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  timeout: 30000,
  baseURL: '/api'
}

// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/api`
  options.withCredentials = true
}

const instance = axios.create(options)

instance.interceptors.request.use(
  config => {
    const timestamp = new Date().getTime()
    const param = `timestamp=${timestamp}&secret=${SECRET}`
    const sign = crypto(param)

    config.params = Object.assign({}, config.params, { timestamp, sign })
    return config
  }
)

export default instance
