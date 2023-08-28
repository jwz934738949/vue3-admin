<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <div class="login-box">
          <el-form>
            <h1>欢迎来到vue3-demo系统</h1>
            <el-form-item>
              <el-input
                v-model="loginForm.username"
                :prefix-icon="User"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="loginForm.password"
                type="password"
                show-password
                :prefix-icon="Lock"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn" type="primary">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'

const loginForm = ref({
  username: '',
  password: '',
})
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: 100% 100%;

  .login-box {
    width: 50%;
    height: 25vh;
    position: relative;
    top: 30vh;
    left: 15vw;
    background-color: #56b8f7;
    border-radius: 8px;
    padding: 25px;

    h1 {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: 600;
      color: #fff;
    }

    .login-btn {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>
