import { createApp } from 'vue'
import '@/app/style/main.scss'
import App from './App.vue'
import router from "@/app/routes"


const app = createApp(App)
app.use(router);
app.mount('#app')
