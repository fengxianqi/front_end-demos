// 标题：链式调用+延迟计算
// 描述信息
// 写一个加法函数sum，支持sum(1)(2)(3,4)(5,6,7....)

// console.log(sum(1,2,3)(4)) => 输出 10

function sum(...args) {
  const add = (...nums) => {
      return nums.reduce((prev, cur) => prev + cur, 0)
  }
  let ret = 0
  ret += add(...args)
  function innerSum(..._args) {
      ret += add(..._args)
      return innerSum
  }
  
  // 隐士类型转换
  innerSum.toString = function(){
      return ret
  }
  return innerSum
}

console.log(sum(1,2,3)(4))

console.log(sum(1)(2))

console.log(sum(1,2,3)(4,5))

console.log(sum(1,2,3)(4,5)(6))