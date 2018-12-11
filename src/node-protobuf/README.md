
> 前端时间分享了一篇：[如何在前端中使用protobuf（vue篇）](https://juejin.im/post/5bcda388e51d457a1179da01)，一直懒癌发作把node篇拖到了现在。上次分享中很多同学就"前端为什么要用protobuf"展开了一些讨论，表示前端不适合用```protobuf```。我司是ios、android、web几个端都一起用了protobuf，我也在之前的分享中讲了其中的一些收益和好处。如果你们公司也用到，或者以后可能用到，我的这两篇分享或许能给你一些启发。合不合适在这里就不讨论了，下面进入正题。
## 解析思路
同样是要使用[protobuf.js](https://github.com/dcodeIO/protobuf.js)这个库来解析。

之前提到，在vue中，为了避免直接使用```.proto```文件，需要将所有的```.proto```打包成```.js```来使用。

而在node端，也可以打包成js文件来处理。但node端是服务端环境了，完全可以允许```.proto```的存在，所以其实我们可以有优雅的使用方式：直接解析。


## 预期效果
封装两个基础模块：
- ```request.js```: 用于根据接口名称、请求体、返回值类型，发起请求。
- ```proto.js```用于解析proto,将数据转换为二进制。
在项目中可以这样使用：
```
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
exports.getStudentList = function getStudentList (params) {
  const req = proto.create('school.PBStudentListReq', params)
  return request('school.getStudentList', req, 'school.PBStudentListRsp')
}

// 项目中使用lib/api.js
const api = require('../lib/api')
const req = {
  limit: 20,
  offset: 0
}
api.getStudentList(req).then((res) => {
  console.log(res)
}).catch(() => {
  // ...
})
```

## 准备工作：
准备[如何在前端中使用protobuf（vue篇）](https://juejin.im/post/5bcda388e51d457a1179da01#heading-4)中定义好的一份```.proto```,注意这份proto中定义了两个命名空间：```framework```和```school```。[proto文件源码](https://github.com/fengxianqi/front_end-demos/tree/master/src/node-protobuf/src/proto)
## 封装proto.js
参考下官方文档将object转化为buffer的方法：
```
protobuf.load("awesome.proto", function(err, root) {
    if (err)
        throw err;
    var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");

    var payload = { awesomeField: "AwesomeString" };

    var message = AwesomeMessage.create(payload); 

    var buffer = AwesomeMessage.encode(message).finish();
});
```
应该比较容易理解：先load ```awesome.proto```，然后将数据```payload```转变成我们想要的```buffer```。```create```和```encode```都是protobufjs提供的方法。

如果我们的项目中只有一个```.proto```文件，我们完全可以像官方文档这样用。
但是在实际项目中，往往是有很多个```.proto```文件的，如果每个PBMessage都要先知道在哪个```.proto```文件中，使用起来会比较麻烦，所以需要封装一下。
服务端同学给我们的接口枚举中一般是这样的：
```
getStudentList = 0;    // 获取所有学生的列表, PBStudentListReq => PBStudentListRsp
```
这里只告诉了这个接口的请求体是```PBStudentListReq```，返回值是```PBStudentListRsp```，而它们所在的```.proto```文件是不知道的。

为了使用方便，我们希望封装一个方法，形如：
```
const reqBuffer = proto.create('school.PBStudentListReq', dataObj) 
```
我们使用时只需要以```PBStudentListReq```和```dataObj```作为参数即可，无需关心```PBStudentListReq```是在哪个```.proto```文件中。
这里有个难点:**如何根据类型来找到所在的```.proto```呢？**

方法是：先把所有的```.proto```放进内存中，然后在其中找到对应的类型。
#### 先把所有的proto保存在```_proto```变量中。

```
// proto.js
const fs = require('fs')
const path = require('path')
const ProtoBuf = require('protobufjs')

let _proto = null

// 将所有的.proto存放在_proto中
function loadProtoDir (dirPath) {
  const files = fs.readdirSync(dirPath)

  const protoFiles = files
    .filter(fileName => fileName.endsWith('.proto'))
    .map(fileName => path.join(dirPath, fileName))
  _proto = ProtoBuf.loadSync(protoFiles).nested
  return _proto
}
```
```_proto```类似一颗树，我们可以遍历这棵树找到具体的类型，也可以通过其他方法直接获取，比如```lodash.get()```方法,它支持```obj['xx.xx.xx']```这样的形式来取值。
```
const _ = require('lodash')
const PBMessage = _.get(_proto, 'school.PBStudentListReq')
```
这样我们就拿到了顺利地根据类型在所有的proto获取到了```PBMessage```，```PBMessage```中会有protobuf.js提供的```create```、```encode```等方法，我们可以直接利用并将object转成buffer。
```
const reqData = {a: '1'}
const message = PBMessage.create(reqData)
const reqBuffer = PBMessage.encode(message).finish()
```
整理一下，为了后面使用方便，封装成三个函数：
```
let _proto = null

// 将所有的.proto存放在_proto中
function loadProtoDir (dirPath) {
  const files = fs.readdirSync(dirPath)

  const protoFiles = files
    .filter(fileName => fileName.endsWith('.proto'))
    .map(fileName => path.join(dirPath, fileName))
  _proto = ProtoBuf.loadSync(protoFiles).nested
  return _proto
}

// 根据typeName获取PBMessage
function lookup (typeName) {
  if (!_.isString(typeName)) {
    throw new TypeError('typeName must be a string')
  }
  if (!_proto) {
    throw new TypeError('Please load proto before lookup')
  }
  return _.get(_proto, typeName)
}

function create (protoName, obj) {
  // 根据protoName找到对应的message
  const model = lookup(protoName)
  if (!model) {
    throw new TypeError(`${protoName} not found, please check it again`)
  } 
  const req = model.create(obj)
  return model.encode(req).finish()
}

module.exports = {
  lookup, // 这个方法将在request中会用到
  create,
  loadProtoDir
}
```
这里要求，在使用```create```和```lookup```前，需要先```loadProtoDir```，将所有的proto都放进内存。
### 2. 封装request.js
这里要建议先看一下[```MessageType.proto```](https://github.com/fengxianqi/front_end-demos/tree/master/src/node-protobuf/proto)，其中定义了与后端约定的接口枚举、请求体、响应体。
```
const rp = require('request-promise') 
const proto = require('./proto.js')  // 上面我们封装好的proto.js

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
```
## 3. 使用

```request.js```和```proto.js```提供底层的服务，为了使用方便，我们还要封装一个```api.js```，定义项目中所有的api。
```
const request = require('./request')
const proto = require('./proto')

exports.getStudentList = function getStudentList (params) {
  const req = proto.create('school.PBStudentListReq', params)
  return request('school.getStudentList', req, 'school.PBStudentListRsp')
}
```
在项目中使用接口时，只需要```require('lib/api')```，不直接引用proto.js和request.js。
```
// test.js

const api = require('../lib/api')

const req = {
  limit: 20,
  offset: 0
}
api.getStudentList(req).then((res) => {
  console.log(res)
}).catch(() => {
  // ...
})
```
## 最后
