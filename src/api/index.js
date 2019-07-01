import axios from 'axios'
// axios 请求返回的是一个promise  axios 是基于promise封装的ajax
axios.defaults.baseURL="http://localhost:3000" //提取公关的请求地址
// 轮播图  export 导出 导出的是一个接口，不能是固定值
// 响应拦截 interceptors 拦截器  相当于过滤器
  axios.interceptors.response.use(res=>{
      return res.data
  },err=>{
      Promise.reject(err)
  }) //响应拦截   interceptors拦截器（过滤器）
let getBanner = ()=>{
    return axios.get("/banner")
}
const getList=()=>{
    return axios.get("/list")
}
export {getBanner,getList}
// export default 1

