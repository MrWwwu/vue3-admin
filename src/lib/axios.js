import axios from 'axios'
import { baseURL } from '@/config'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/lib/loading.js'
import { Message } from 'element-ui'
import router from '@/router'

class HttpRequest {
  constructor(baseUrl = baseURL){
    this.baseUrl = baseUrl
  }
  getInsideConfig(options){
    const config = {
      baseUrl:this.baseUrl,
      timeout:30000,
      withCredentials:true,
      headers:{
        'Content-Type':options.dataType === 'form' ? 'multipart/form-data':'application/json;charset=utf-8'
      }
    }
  }
  interceptors(instance,url){
    instance.interceptors.request.use(config => {
      showFullScreenLoading()
      return config
    },error=>{
      tryHideFullScreenLoading()
      Message.error({ message: '请求超时!' })
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res=>{
      tryHideFullScreenLoading()
      if(res.data.code == 200){
        return res.data.result;
      }else if (res.data.code == 401){
        router.push('/login');
        return Promise.reject(res);
      }else if (res.data.code == 201) {
        Message.error({ message: res.data.msg });
        return Promise.reject(res);
      }
      return Promise.reject(res);
    },error =>{
      tryHideFullScreenLoading()
      if (err.response.status == 504 || err.response.status == 404) {
        Message.error({ message: '服务器被吃了⊙﹏⊙∥' });
      }else if (err.response.status == 403) {
        Message.error({ message: '权限不足,请联系管理员!' });
      } else {
        Message.error({ message: '未知错误' });
      }
      return Promise.reject(error)
    })
  }
  request(options){
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(options),options)
    this.interceptors(instance,options.url)
    return instance(options)
  }
}
export default HttpRequest
