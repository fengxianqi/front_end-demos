// https://zhuanlan.zhihu.com/p/41502945

Promise.prototype.all = function(promises) {
  let ret = [];
  let count = 0;
  let len = promises.length;
  return new Promise(function(resolve, reject) {
    for (let item of promises) {
      Promise.resolve(item).then(res => {
        ret.push(res)
        count++
        if (count === len) {
          return resolve(ret)
        }
      }, function(err)  {
        return reject(err)
      })
    }
  })
}


let promise1 = new Promise(function(resolve) {
  resolve(1);
});
let promise2 = new Promise(function(resolve) {
  resolve(2);
});
let promise3 = new Promise(function(resolve) {
  resolve(3);
});

let promiseAll = Promise.all([promise1, promise2, promise3]);
promiseAll.then(function(res) {
  console.log(res);
});