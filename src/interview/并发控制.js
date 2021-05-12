// js实现一个带并发限制的一步调度器Scheduler，保证同时运行的任务最多有两个。


// class Scheduler {
//   add (promiseCreator) {
//     // ...
//   }
//   // ....
// }


// const timeout = (time) => new Promise(resolve => {
//   setTimeout(resolve, time)
// })

// const scheduler = new Scheduler()
// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time).then(() => console.log(order)))
// }


// addTask(1000, '1')
// addTask(500, '2')
// addTask(300, '3')
// addTask(400, '4')

// output: 2 3 1 4



class Scheduler {
  constructor(){
    this.list = [] 
    this.maxCount = 2
    this.runningCount = 0
  }

  add (promiseCreator) {
    // 添加到数组里面，等待执行
    this.list.push(promiseCreator)
  }

  request(){
    if (!this.list.length || this.runningCount > this.maxCount) {
      return
    }
    this.runningCount++
    this.list.shift()().then(() => {
      this.runningCount--
      this.request()
    })
  }


  startTask(){
    for (let i=0;i<this.maxCount;i++) {
      this.request()
    }
  }

}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}


addTask(10000, '1')
addTask(5000, '2')
addTask(3000, '3')
addTask(4000, '4')

scheduler.startTask()

