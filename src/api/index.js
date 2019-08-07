import { get, post} from '@/http'
import { loginApi } from './app'

export function useLogin (params) {
  return post(loginApi.login, params)
}