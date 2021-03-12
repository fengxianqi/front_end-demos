// https://cloud.tencent.com/developer/article/1497418



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

    return target
  } else {
    return obj
  }
}


// 考虑循环引用
// 使用map
function deepClone2(obj, map = new Map()) {
  if (isObject(obj)) {
    let target = Array.isArray(obj) ? [] : {}

    // 防止循环引用
    if (map.get(obj)) {
      return obj
    }

    map.set(obj, target)

    for (const key in obj) {
      target[key] = deepClone(obj[key])
    }

    return target
  } else {
    return obj
  }
}


// 考虑其他数据类型
// map，set，function， reg
function deepClone3(target) {
    // 克隆set
    let cloneTarget;
    if (deepTag.includes(type)) {
      cloneTarget = getInit(target, type);
    }
    if (Object.prototype.toString.call(target) === '[object Set]') {
      target.forEach(value => {
          cloneTarget.add(deepClone3(value));
      });
      return cloneTarget;
  }
    // 克隆map
    if (Object.prototype.toString.call(target) === '[object Map]') {
      target.forEach((value, key) => {
          cloneTarget.set(key, clone(value));
      });
      return cloneTarget;
  }
}



function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
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




