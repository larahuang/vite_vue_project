import { createApp } from 'vue'
import router from './router/index' 
import './style.css'
import App from './App.vue'

createApp(App)
 .use(router) //使用router
 .mount('#app')
