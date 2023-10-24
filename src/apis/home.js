import httpInstance from "@/utils/http";

//获取banner
export function getBannerAPI( params = {}) {
  const { distributionSite='1' } = params
  return httpInstance({
    url: "/home/banner",
    params:{
      distributionSite
    }
  })
}

/**
* @description: 获取新鲜好物
* @param {*}
* @return {*}
*/
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

/**
* @description: 获取人气单品
* @param {*}
* @return {*}
*/
export const findHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}

/**
* @description: 获取商品模块
* @param {*}
* @return {*}
*/
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}