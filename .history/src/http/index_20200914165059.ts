import axios, { AxiosInstance,AxiosError, AxiosRequestConfig,AxiosResponse } from 'axios'
import nprogress from'nprogress'

const service: AxiosInstance=axios.create({
    baseURL:'/api',
    timeout:1000
})

service.interceptors.request.use((config:AxiosRequestConfig):AxiosRequestConfig=>{
    nprogress.start()
    let token = localStorage.getItem('token')
    // config.headers['Authorization'] = `Bearer ${token}`
    return config
},(err:AxiosError)=>{
    nprogress.done()
    console.log(err)
    return Promise.reject(err)
})

service.interceptors.response.use((res:AxiosResponse):AxiosResponse=>{
    nprogress.done()
    return res.data
},(err: AxiosError)=>{
    nprogress.done()
    if(err.response && err.response.status){
        let status=err.response.status
    }
}
)

// 响应拦截: 每一次接口返回数据的时候都会做的事情
service.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
  }, err => {
    if (err.response && err.response.status) {
      // 错误请求的状态码
      let status = err.response.status
      if (status === 400) {
        console.log('参数错误')
      }
      if (status === 401) {
        console.log('登录过期,请重新登录')
      }
      if (status === 403) {
        console.log('没有权限')
      }
      if (status === 404) {
        console.log('接口路径错误')
      }
      if (status === 500) {
        console.log('服务器出错')
      }
      if (status === 503) {
        console.log('服务器在维护')
      }
    }
    return Promise.reject(err)
  })
  
  
  export default service