import { createApp } from 'vue'
// import App from './App.vue'
import '../src/styles/jove.css'
import FeuillePage from './Feuille-page.vue'
import router from "router"

createApp(FeuillePage).
use(router)
.mount('#app')
