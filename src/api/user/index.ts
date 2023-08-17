import request from '@/utils/request'
import { LoginForm, LoginResp, UserInfoResp } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USER_INFO = '/user/info',
}

//* 获取登录信息
export const loginApi = (data: LoginForm) =>
  request.post<any, LoginResp>(API.LOGIN_URL, data)

//* 获取登录后用户信息
export const getUserInfoApi = () =>
  request.get<any, UserInfoResp>(API.USER_INFO)
