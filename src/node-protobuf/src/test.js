// 页面中使用lib/api.js
const api = require('../lib/api')

const req = {
  limit: 20,
  offset: 0
}
api.getStudentList(req).then((res) => {
  console.log(res)
}).catch(() => {
  // ...
})