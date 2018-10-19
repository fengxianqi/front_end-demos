import proto from '@/proto/proto'
import request from '@/lib/request'

export function getStudentList (params) {
  const req = proto.create('PBStudentListReq', params)
  return request('getStudentList', req, 'school.PBStudentListRsp')
}
