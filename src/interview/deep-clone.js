



function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

// 只考虑数组和object
function deepClone(obj) {
  if (isObject(obj)) {
    let target = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      target[key] = deepClone(obj[key])
    }
    console.log(target)
    return target
  } else {
    return obj
  }
}


// 考虑循环引用
// 
function deepClone2(obj) {

}



// 考虑其他数据类型
// map，set，function， reg
function deepClone3(obj) {

}














const target = {
  a: '123',
  b: 123,
  c: {
    d: 123
  },
  e: [1,2,3],
  f: [
    { 
      a:123
    }
  ]
}


const cloneTarget = deepClone(target)

// target.f[0].a = 555

console.log('clone target:', cloneTarget, isObject(cloneTarget))




