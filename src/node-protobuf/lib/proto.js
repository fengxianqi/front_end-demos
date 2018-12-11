
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const ProtoBuf = require('protobufjs')

// 所有的proto文件
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





// 根据typeName在所有的.proto中的pb
// 如：school.PBStudent,返回ProtoBuf处理后的PBMessage
// 这里需要根据obj[school.PBStudent]来取值，所以用到一个deepGet方法，可以用lodash.get()来代替
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
	lookup,
	create,
	loadProtoDir // 在调用create前，先调用该方法把所有的.proto放到内存中
}