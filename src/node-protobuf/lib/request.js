const rp = require('request-promise') 
const proto = require('./proto.js')  // 上面我们封装好的proto.js
const path = require('path')

// 使用proto前先loadProtoDir
proto.loadProtoDir(path.join(__dirname, '../proto/'))

/**
 * 
 * @param {* 接口名称} msgType 
 * @param {* proto.create()后的buffer} requestBody 
 * @param {* 返回类型} responseType 
 */
function request (msgType, requestBody, responseType) {
  // 得到api的枚举值
  const _msgType = proto.lookup('framework.PBMessageType')[msgType]

  // PBMessageRequest是公共请求体,携带一些额外的token等信息，后端通过type获得接口名称，messageData获得请求数据
  const PBMessageRequest = proto.lookup('framework.PBMessageRequest')
  const req = PBMessageRequest.encode({
    timeStamp: new Date().getTime(),
    type: _msgType,
    version: '1.0',
    messageData: requestBody,
    token: 'xxxxxxx'
  }).finish()

  // 发起请求，在vue中我们可以使用axios发起ajax，但node端需要换一个，比如"request"
  // 我这里推荐使用一个不错的库："request-promise"，它支持promise
  const options = {
    method: 'POST',
    uri: 'http://your_server.com/api',
    body: req,
    encoding: null,
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  }

  return rp.post(options).then((res) => {
    // 解析二进制返回值
    const  decodeResponse = proto.lookup('framework.PBMessageResponse').decode(res)
    const { resultInfo, resultCode } = decodeResponse
    if (resultCode === 0) {
      // 进一步解析解析PBMessageResponse中的messageData
      const model = proto.lookup(responseType)
      let msgData = model.decode(decodeResponse.messageData)
      return msgData
    } else {
      throw new Error(`Fetch ${msgType} failed.`)
    }
  })
}

module.exports = request