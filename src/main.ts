import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'
import routers from './routers'
import './style.css'
import App from './App.vue'

createApp(App).use(i18n).use(routers).use(createPinia()).mount('#app')
