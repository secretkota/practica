import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'flowbite'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(VueApexCharts)

app.mount('#app')
