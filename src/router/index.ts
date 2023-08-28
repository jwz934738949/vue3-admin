import { createRouter, createWebHashHistory } from 'vue-router'
import { constanceRoutes } from './route'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constanceRoutes,
  //* 路由切换滚动
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
