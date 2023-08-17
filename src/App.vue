<template>
  <div class="app">
    <div class="header">abccccccc</div>
  </div>
  <el-button type="primary">element-button</el-button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { loginApi } from '@/api/user/index'

onMounted(() => {
  loginApi({ username: 'admin', password: '123456' }).then((res: any) => {
    console.log(res)
  })
})
</script>

<style scoped lang="scss">
.app {
  .header {
    color: red;
  }
}
</style>
