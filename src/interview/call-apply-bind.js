



Function.prototype.myCall = function(context, ...args) {
  // context为空或null时，指向window
  const ctx = context || global

  const fn = Symbol('fn')

  ctx[fn] = this

  // 由于参数使用了...，因此args此时是一个数组，因此调用时还需要解构一下该数组
  const ret = ctx[fn](...args)

  // 别忘了删掉fn
  delete ctx[fn]

  return ret
}


Function.prototype.myApply = function(context, args) {
  const ctx = context || global
  const fn = Symbol('fn')

  ctx[fn] = this

  // 在apply中，args是一个数组，因此需要解构，解构后类似fu(1,2,3)
  const ret = ctx[fn](...args)

  delete ctx[fn]

  return ret
}

// test
const person = {
  name: 'zhangsan',
  hello: function(ext, ext2){
    console.log(`hello, ${this.name}!${ext},${ext2}`)
  }
}

const lisi = {
  name: 'lisi'
}

person.hello()

person.hello.call(lisi, 'a', 'b')
person.hello.myCall(lisi, 'a', 'b')


person.hello.myApply(lisi, ['a', 'b'])




