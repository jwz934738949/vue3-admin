// 引入要全局注册的组件
import SvgIcon from './SvgIcon/index.vue'

// 定义全局对象
const allGlobalComponents: any = { SvgIcon }

export default {
  install(app: any) {
    Object.keys(allGlobalComponents).forEach((item: any) => {
      // 注册为全局组件
      app.component(item, allGlobalComponents[item])
    })
  },
}
