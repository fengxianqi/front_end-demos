import request from '@/lib/request'

export function getStudentList (params) {
  const req = request.create('PBStudentListReq', params)
  return request('getStudentList', req, 'school.PBStudentListRsp')
}
