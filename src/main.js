import { createApp } from 'vue'
import router from './Router'
import './style.css'
import App from '../src/App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'


createApp(App).use(router).mount('#app')
