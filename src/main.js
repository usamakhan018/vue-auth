import { createApp, markRaw } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './axios'
const pinia = createPinia()

pinia.use(({store}) => {
	store.router = markRaw(router)
})

createApp(App).use(pinia).use(router).mount('#app')
