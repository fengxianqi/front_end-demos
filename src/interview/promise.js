/**
 * 基础版本的promise
 */

// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    // 默认状态为 PENDING
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;

    // 调用此方法就是成功
    let resolve = (value) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    } 

    // 调用此方法就是失败
    let reject = (reason) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    }

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者  
      executor(resolve,reject)
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error)
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}


const p1 = new MyPromise((resolve, reject) => {
  resolve('成功')
})

p1.then(res => {
  console.log('success', res)
}, err => {
  console.log('reject', err)
})

console.log('p1 status', p1.status)

// 基础版本无法做异步操作
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  })
})

p2.then(res => {
  console.log('success', res)
}, err => {
  console.log('reject', err)
})
console.log('p2 status', p2.status) // 一直处于PENDING





class MyPromise2 {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks= [];

    let resolve = (value) => {
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    } 

    let reject = (reason) => {
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 依次将对应的函数执行
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    }

    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(()=> {
        onRejected(this.reason);
      })
    }
    return this
  }
}
const promise = new MyPromise2((resolve, reject) => {
  resolve('成功');
  setTimeout(() => {
  },1000);
}).then(
  (data) => {
    console.log('success', data)
  },
  (err) => {
    console.log('faild', err)
  }
).then(res => {
  console.log('aaa', res)
})


class CustomPromise {
  state = 'PENDING'
  value = undefined
  thenCallbacks = []
  errorCallbacks = []

  constructor(executor) {
    executor(this.resolver.bind(this), this.reject.bind(this))
  }

  resolver(value){
    this.state = 'FULFILLED'
    this.value = value
    this.thenCallbacks.forEach(cb => cb(this.value))
  }

  reject(value) {
    this.state = 'REJECTED'
    this.value = value
    this.errorCallbacks.forEach(cb => cb(this.value))
  }

  then(callback){
    this.thenCallbacks.push(callback)
    return this
  }

  catch(callback){
    this.errorCallbacks.push(callback)
    return this
  }

}


const cp = new CustomPromise((resolve, reject) => {
  resolve('cp成功');
}).then(
  (data) => {
    console.log('cp success', data)
  },
  (err) => {
    console.log('cp faild', err)
  }
).then(res => {
  console.log('res', res)
})