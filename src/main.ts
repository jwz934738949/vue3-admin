/** @format */

import { createApp } from 'vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(router)

app.mount('#app')
