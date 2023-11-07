import { getBannerAPI } from '@/apis/home';
import { onMounted, ref } from 'vue'

export function useBanner() {

  const bannerList = ref([])
//发送轮播图请求
const getBanner = async () => {
  const res = await getBannerAPI({
    distributionSite: '2'
  })
  // console.log(res);
  bannerList.value = res.data
}
onMounted(() => getBanner())

return {
  bannerList
}
}