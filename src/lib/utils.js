import { IS_LOGIN_KEY } from '../constant/localStorage'

export function isLogin() {
  const loginVal = uni.getStorageSync(IS_LOGIN_KEY)
  return !!loginVal
}
