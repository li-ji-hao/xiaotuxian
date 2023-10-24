import { useIntersectionObserver } from '@vueuse/core'


export const lazyPlugin = {
  install(app){
    //懒加载指令
    app.directive('img-lazy',{
      mounted(el,binding){
        // console.log(el,binding);
        const { stop } = useIntersectionObserver(el,
          ([{ isIntersecting }]) => {
            // console.log(isIntersecting);
            if(isIntersecting){
              //进入视口区域时加载
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}