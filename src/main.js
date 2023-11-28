

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'


import '@/styles/common.scss'

import { lazyPlugin } from './directives'

//引入全局组件插件
import { componentPlugin } from './components'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)

app.mount('#app')

app.use(componentPlugin)
//定义全局指令
app.use(lazyPlugin)


