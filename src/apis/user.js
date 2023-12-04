// 封装所有和用户相关的接口数据

import httpInstance from "@/utils/http"

export const loginAPI = ({ account,password}) => {
  return httpInstance({
    url:'/login',
    method:'POST',
    data:{
      account,
      password
    }
  })
}

export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}

// import { my } from '@/utils/http'

// export const loginAPI = ({ username,password}) => {
//   return my({
//     url:'api/login',
//     method:'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
//     data:{
//       username,
//       password
//     }
//   })
// }