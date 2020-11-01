

// https://zhuanlan.zhihu.com/p/71553017
// https://juejin.im/post/6844903880333983751#heading-10



// 参数与call一样,有缺陷版本，当使用new时会出问题,也没有处理原型链
Function.prototype.myBind = function(context, ...args) {
  const _this = this

  return function(...others) {
    return _this.call(context, ...args, ...others)
  }
}



function Student(name, age) {
  this.name = name;
  this.age = age;
};

Student.prototype.type = 'student'


const BoundStudent1 = Student.bind({ name: 'Taylor' }, 'ly1');
console.log('b1', new BoundStudent1(22)); // => Student { name: 'ly', age: 22 } 
const BoundStudent2 = Student.myBind({ name: 'Taylor' }, 'ly2');
console.log('b2', new BoundStudent2(22)); // => {}

// 修复new的版本
// new.target可以判断是否是new方式调用
// 该版本没有处理原型链
Function.prototype.myBind2 = function(context, ...args) {
  const _this = this
  return function(...others) {
    // new方式调用时，call的this为调用时的this
    const target = new.target ? this : context
    return _this.call(target, ...args, ...others)
  }
}

const BoundStudent3 = Student.bind({ name: 'Taylor' }, 'ly3');
const b3 = new BoundStudent3(22)
console.log('b3', b3) // => { name: 'ly', age: 22 }
console.log('b3 type:', b3.type)  // => student

const BoundStudent4 = Student.myBind2({ name: 'Taylor' }, 'ly4');
const b4 = new BoundStudent4(22);
console.log('b4', b4) // => { name: 'ly', age: 22 }
console.log('b4 type:', b4.type)  // => undefined



// 修复原型链，修复new, 但name和length有缺陷
Function.prototype.myBind3 = function(context, ...args) {
  const _this = this

  // bind 返回的是一个新函数，如果使用 new 调用了被绑定后的函数，其中的 this 即是 new 最后返回的实例对象，也就是 target
  const boundFunc = function(...others) {
    // new方式调用时，call的this为调用时的this
    const target = new.target ? this : context
    return _this.call(target, ...args, ...others)
  }

  // 修复原型链
  boundFunc.prototype = Object.create(_this.prototype)

  boundFunc.prototype.constructor = boundFunc

  return boundFunc
}

const BoundStudent5 = Student.myBind3({ name: 'Taylor' }, 'ly4');
const b5 = new BoundStudent5(22);
console.log('b5', b5) // => { name: 'ly', age: 22 }
console.log('b5 type:', b5.type)  // => student


// 绑定后func.name变为 bound func
// func.length 表示函数的参数个数
function func (a, b,c){}

const bb = func.bind({}, 1)
console.log('boundFunc.name', bb.name) //=> bound func
console.log('func.name', func.name) // => func
console.log('boundFunc.length', bb.length) //=> 2, func的参数数量-bind时传的参数数量
console.log('func.length', func.length) //=> 3

const b7 = func.myBind3({}, 1)
console.log('boundFunc.name3', b7.name) //=> boundFunc 错误
console.log('boundFunc.length3', b7.length) //=> 0 错误



// Function.prototype.name 和 Function.prototype.length 是不可写的
Function.prototype.myBind4 = function (context, ...args) {
  const _this = this

  const boundFunc = function (...others) {
    return _this.call(new.target ? this : context, ...args, ...others)
  }

// 修复原型链
  boundFunc.prototype = Object.create(_this.prototype)
  boundFunc.prototype.constructor = boundFunc

  // 修复原型参数
  Object.defineProperties(boundFunc, {
    name: {
      value: `bound ${_this.name}`
    },
    length: {
      value: _this.length
    }
  })

  return boundFunc
}


const b8 = func.myBind4({}, 1)
console.log('boundFunc.name4', b8.name) //=> bound func
console.log('boundFunc.length4', b8.length) //=>2