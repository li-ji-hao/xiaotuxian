//axios基础封装
import axios from 'axios'

import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'

import { useUserStore } from '@/stores/user.js'

import router from '@/router'

const httpInstance = axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000
})

const mysever =axios.create({
  baseURL:'http://127.0.0.1:3007',
  timeout:5000
})

//请求拦截器
httpInstance.interceptors.request.use(function (config) {
  //从pinia获取token数据
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// axios响应拦截器
httpInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const userStore = useUserStore()
  ElMessage({
    type:'warning',
    message:error.response.data.message
  })
  //401token失效处理
  //跳转登录页
  if(error.response.status === 401){
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(error);
});

export const my = mysever
export default httpInstance 