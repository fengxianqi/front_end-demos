// lib/api.js 封装API

const request = require('./request')
const proto = require('./proto')

// params是object类型的请求参数
// school.PBStudentListReq 是定义好的请求体model
// school.PBStudentListRsp 是定义好的响应model
// getStudentList 是接口名称
exports.getStudentList = function getStudentList (params) {
  const req = request.create('PBStudentListReq', params)
  return request('getStudentList', req, 'school.PBStudentListRsp')
}

// 使用
const api = require('../lib/api')
const req = {
  const req = {
    limit: 20,
    offset: 0
  }
}
api.getStudentList(req).then((res) => {
	console.log(res)
}).catch(() => {
	// ...
})
