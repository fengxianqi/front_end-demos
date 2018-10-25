import axios from 'axios'
import protoRoot from '@/proto/proto'
import protobuf from 'protobufjs'

const httpService = axios.create({
  timeout: 45000,
  method: 'post',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/octet-stream'
  },
  responseType: 'arraybuffer'
})

// 请求体message
const PBMessageRequest = protoRoot.lookup('framework.PBMessageRequest')
// 响应体的message
const PBMessageResponse = protoRoot.lookup('framework.PBMessageResponse')

const apiVersion = '1.0.0'
const token = 'my_token'

function getMessageTypeValue(msgType) {
  const PBMessageType = protoRoot.lookup('framework.PBMessageType')
  const ret = PBMessageType.values[msgType]
  return ret
}

// 将请求数据encode成二进制，encode是proto.js提供的方法
function transformRequest(data) {
  return PBMessageRequest.encode(data).finish()
}

function isArrayBuffer (obj) {
  return Object.prototype.toString.call(obj) === '[object ArrayBuffer]'
}

function transformResponseFactory(responseType) {
  return function transformResponse(rawResponse) {
    // 判断response是否是arrayBuffer
    if (rawResponse == null || !isArrayBuffer(rawResponse)) {
      return rawResponse
    }
    try {
      const buf = protobuf.util.newBuffer(rawResponse)
      // decode响应体
      const decodedResponse = PBMessageResponse.decode(buf)
      if (decodedResponse.messageData && responseType) {
        const model = protoRoot.lookup(responseType)
        decodedResponse.messageData = model.decode(decodedResponse.messageData)
      }
      return decodedResponse
    } catch (err) {
      return err
    }
  }
}

/**
 * 
 * @param {*} msgType 接口名称
 * @param {*} requestBody 请求体参数
 * @param {*} responseType 返回值
 */
function request(msgType, requestBody, responseType) {
  // 得到api的枚举值
  const _msgType = getMessageTypeValue(msgType)

  // 构造公共请求体:PBMessageRequest
  const reqData = {
    timeStamp: new Date().getTime(),
    type: _msgType,
    version: apiVersion,
    messageData: requestBody, // 加密后的请求参数
    token: token
  }

  // 将对象序列化成请求体实例
  const req = PBMessageRequest.create(reqData)
  
  // 这里用到axios的配置项：transformRequest和transformResponse
  // transformRequest 发起请求时，调用transformRequest方法，目的是将req转换成二进制
  // transformResponse 对返回的数据进行处理，目的是将二进制转换成真正的json数据
  return httpService.post('/api', req, {
    transformRequest,
    transformResponse: transformResponseFactory(responseType)
  }).then(({data, status}) => {
    // 对请求做处理
    if (status !== 200) {
      const err = new Error('服务器异常')
      throw err
    }
    console.log(data)
  },(err) => {
    throw err
  })
}

// 在request下添加一个方法，方便用于处理请求参数
request.create = function (protoName, obj) {
  const pbConstruct = protoRoot.lookup(protoName)
  return pbConstruct.encode(obj).finish()
}

export default request
