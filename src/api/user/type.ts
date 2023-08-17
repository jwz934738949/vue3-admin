interface DataType {
  token: string
}

interface UserInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface CheckUser {
  checkUser: UserInfo
}

//* 登录接口请求类
export interface LoginForm {
  username: string
  password: string
}

//* 登录接口响应类
export interface LoginResp {
  code: number
  data: DataType
}

//* 获取登录人员信息相应类
export interface UserInfoResp {
  code: number
  data: CheckUser
}
