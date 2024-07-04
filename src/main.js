import { createApp } from 'vue'
import './assets/styles/style.css'
import App from '@/App.vue'
import router from "@/router";
import { createPinia } from "pinia";
// import allProducts from "./store/products";
const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
