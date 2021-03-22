// 节流
// https://github.com/mqyqingfeng/Blog/issues/26

// 第一版
function throttle(func, wait) {
  let context, args;
  let previous = 0;

  return function() {
      var now = Date.now();
      context = this;
      args = arguments;
      if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
      }
  }
}


// 使用定时器
function throttle2 (func, wait) {
  let timeout;

  return function() {
      context = this;
      args = arguments;
      if (!timeout) {
          timeout = setTimeout(function(){
              timeout = null;
              func.apply(context, args)
          }, wait)
      }

  }
}

// 比较两个方法：

// 第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
// 第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件