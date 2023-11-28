//管理用户数据相关

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user';
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  //定义管理用户数据的state
  const useInfo = ref({})
  //定义获取接口数据的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    useInfo.value = res.data.result
    //合并购物车
    mergeCartAPI(cartStore.cartList.map(item=>{
      return {
        skuId:item.skuId,
        selected:item.selected,
        count:item.count
      }
    }))
    cartStore.updateNewList()
  }

  //退出时清楚用户登录信息
  const clearUserInfo = () =>{
    useInfo.value = {}
    cartStore.clearCart()
  }

  return {
    useInfo,
    getUserInfo,
    clearUserInfo
  }
},{
  persist: true,
})