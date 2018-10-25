<template>
  <div class="hello">
    <button @click="_getStudentList">获取学生列表</button>
  </div>
</template>

<script>
import { getStudentList } from '@/api/student'
export default {
  name: 'HelloWorld',
  methods: {
    _getStudentList () {
      const req = {
        limit: 20,
        offset: 0
      }
      getStudentList(req).then((res) => {
        console.log(res)
      }).catch((res) => {
        console.error(res)
      })
    }
  },
  created () {
  }
}
</script>

<style lang="scss">

</style>
