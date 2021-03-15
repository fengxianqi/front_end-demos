// 防抖
// https://github.com/mqyqingfeng/Blog/issues/22


// 简单版
function debounce(fn, wait, immediate) {
  let timer = null;
  return function(){
    timer && clearTimeout(timer);
    timer = setTimeout(fn, wait);
  }
}




// 防止改变this指向
function debounce2(fn,wait, immediate) {
  let timer = null;
  return function(){
    timer && clearTimeout(timer);
    const context = this;
    const args = arguments;
    timer = setTimeout(function(){
      fn.apply(context, args);
    }, wait);
  }
}



// 支持立即执行
function debounce3(fn,wait, immediate) {
  let timer = null;
  return function(){
    timer && clearTimeout(timer);
    const context = this;
    const args = arguments;

    if (immediate) {
      // timer为空时，callNow是true，表示第一次，需要执行
      const callNow = !timer
      timer = setTimeout(function(){
        timer = null;
      }, wait);

      if (callNow) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(function(){
        fn.apply(context, args);
      }, wait)
    }

  }
}


// 支持取消

function debounce4(fn,wait, immediate) {
  let timer = null;
  const debounced =  function(){
    timer && clearTimeout(timer);
    const context = this;
    const args = arguments;

    if (immediate) {
      // timer为空时，callNow是true，表示第一次，需要执行
      const callNow = !timer
      timer = setTimeout(function(){
        timer = null;
      }, wait);

      if (callNow) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(function(){
        fn.apply(context, args);
      }, wait)
    }
  }

  debounced.cancel = function(){
    clearTimeout(timer);
    timer = null;
  }
  return debounced;
}