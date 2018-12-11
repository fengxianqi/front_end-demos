// lib/api.js 封装API

const request = require('./request')
const proto = require('./proto')

/**
 * 
 * @param {* 请求数据} params
 *  getStudentList 是接口名称
 *  school.PBStudentListRsp 是定义好的返回model
 * school.PBStudentListReq 是定义好的请求体model
 */
exports.getStudentList = function (params) {
  const req = proto.create('school.PBStudentListReq', params)
  return request('school.getStudentList', req, 'school.PBStudentListRsp')
}
