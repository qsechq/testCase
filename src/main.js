import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import "./styles.scss"
import App from './App.vue'
import router from './router'
import components from '../src/components/UI'

const pinia = createPinia()
setActivePinia(pinia)
const app = createApp(App)
app.use(pinia)
components.forEach(component => {
    app.component(component.name, component)
});
app.use(router)
app.mount('#app')
