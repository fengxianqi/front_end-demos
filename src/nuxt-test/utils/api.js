import axios from '~/plugins/axios'

export function test (params) {
  return axios.get('/test2', { params }).then(res => res.data)
}
