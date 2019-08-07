import axios from 'axios'
import qs from 'qs'
import { baseURL } from '@/config'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/lib/loading.js'
import { Message } from 'element-ui'
import router from '@/router'

axios.defaults.timeout = 10000 // 请求超时时间
axios.defaults.baseURL = baseURL

// axios 请求拦截器
axios.interceptors.request.use(
  config=>{
    showFullScreenLoading();
    return config
  },error=>{
    tryHideFullScreenLoading();
    Message.error({ message: '请求超时!' });
    return Promise.reject(error)
  }
)

// axios respone拦截器
axios.interceptors.response.use(
  res=>{
    tryHideFullScreenLoading()
    if(res.status == 200){
      return res.data.data;
    }else if (res.status == 401){
      router.push('/login');
      return Promise.reject(res);
    }else if (res.status == 201) {
      Message.error({ message: res.data.msg });
      return Promise.reject(res);
    }
    return Promise.reject(res);
  },error=>{
    tryHideFullScreenLoading()
    if (error && error.response) {
      const responseCode = error.response.status;
      switch (responseCode) {
        case 400:
          error.message = '请求错误(400)'
          break
        case 401:
          error.message = '未授权，请重新登录(401)'
          break
        case 403:
          error.message = '拒绝访问(403)'
          break
        case 404:
          error.message = '请求出错(404)'
          break
        case 408:
          error.message = '请求超时(408)'
          break
        case 500:
          error.message = '服务器错误(500)'
          break
        case 501:
          error.message = '服务未实现(501)'
          break
        case 502:
          error.message = '网络错误(502)'
          break
        case 503:
          error.message = '服务不可用(503)'
          break
        case 504:
          error.message = '网络超时(504)'
          break
        case 505:
          error.message = 'HTTP版本不受支持(505)'
          break
        default:
          error.message = `连接出错(${error.response.status})！`            
      }
      Message.error({
        message: error.message,
        position: 'middle',
        duration: 2000
      })
      return Promise.reject(error)
    }
  }
)

/**
 * 封装get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

function get (url, params = {}) {
  return new Promise((resolve, reject) => {
      axios
          .get(url, {
              params: params
          })
          .then(res => {
              resolve(res)
          })
          .catch(err => {
              reject(err)
          })
  })
  // 或者return axios.get();
}
/**
* post方法，对应post请求
* @param {String} url [请求的url地址]
* @param {Object} params [请求时携带的参数]
*/
function post (url, params) {
  return new Promise((resolve, reject) => {
      axios
          .post(url, qs.stringify(params))
          .then(res => {
              resolve(res)
          })
          .catch(err => {
              reject(err)
          })
  })
  //  或者return axios.post();
}

export { get, post }