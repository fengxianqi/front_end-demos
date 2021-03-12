// 实现更精确的倒计时
// https://github.com/wengjq/Blog/issues/26

// 当前服务器时间 = 服务器系统返回时间 + 网络传输时间 + 前端渲染时间 + 常量（可选）

// 思路：
// 在setTimeout函数的内部，通过当前时间-理论执行时间，得出下一个setTimeout执行的间隔


// 线程占用
setInterval(function () { 
  var j = 0; 
  while(j++ < 100000000); 
}, 0); 


 
// ***********************倒计时开始******************************//

let interval = 1000
let ms = 50000  // 从服务器和活动开始时间计算出的时间差，这里测试用 50000ms
let count = 0
let startTime = Date.now()
let timeCounter = null

if (ms >= 0) {
  timeCounter = setTimeout(countDownStart, interval);                  
}
 
function countDownStart() {
  count++;
  var offset = Date.now() - (startTime + count * interval);
  var nextTime = interval - offset;

  if (nextTime < 0) { 
    nextTime = 0
  };

  ms -= interval;

  console.log("误差：" + offset + "ms，下一次执行：" + nextTime + "ms后，离活动开始还有：" + ms + "ms");

  if (ms <= 0) {
    clearTimeout(timeCounter);
    console.log('活动开始啦，冲冲冲')
  } else {
    timeCounter = setTimeout(countDownStart, nextTime);
  }
}


// ***********************倒计时结束******************************//