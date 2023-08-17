import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  return config
})

// 相应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // 失败回调，处理错误信息
    let message = ''

    const status = error.response.status

    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址出错'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }

    ElMessage.error(message)

    return Promise.reject(error)
  },
)

export default request
