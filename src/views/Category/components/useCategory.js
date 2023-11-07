import { getCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useRoute } from 'vue-router';

export function useCategory () {
  //获取数据
const categoryDate = ref({})
//获取路由参数
const route = useRoute()
const getCategory = async (id=route.params.id) => {
  const res = await getCategoryAPI(id)
  categoryDate.value = res.data.result
}
//目标： 
onBeforeRouteUpdate((to)=>{
  console.log(to);
  getCategory(to.params.id)
})

onMounted(() => getCategory())

return {
  categoryDate
}
}