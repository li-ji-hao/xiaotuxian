//封装购物车模块

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user.js'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart.js'

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.useInfo.token)
  const cartList = ref([])

  //获取最新购物车列表action
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.data.result
  }


  //定义action
  const addCart = async (goods) => {
    if (isLogin.value) {
      //登录之后的加入购物车逻辑
      const { skuId, count } = goods
      await insertCartAPI({ skuId, count })
      updateNewList()
    } else {
      //通过匹配传递过来的商品对象中的skuId能不能再cartList中找到，找到了就是添加过
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        // console.log(goods.count);
        item.count += goods.count
        // console.log(item.count);
      } else {
        cartList.value.push(goods)
      }
    }
  }

  //删除购物车
  const delCart = async (skuId) => {
    if (isLogin.value) {
      //
      await delCartAPI([skuId])
      updateNewList()
    } else {
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
  }

  //清除购物车
  const clearCart = () => {
    cartList.value = []
  }

  //计算属性
  //1.总数量 2.总价格
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

  //单选功能
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }

  //是否全选
  const isAll = computed(() => cartList.value.every((item) => item.selected))

  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  //已选商品
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
  return {
    cartList,
    addCart,
    delCart,
    clearCart,
    allCount,
    allPrice,
    selectedCount,
    selectedPrice,
    singleCheck,
    isAll,
    allCheck,
    updateNewList
  }
}, {
  persist: true,
})