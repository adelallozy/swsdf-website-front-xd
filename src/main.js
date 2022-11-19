import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import '@/style/main.scss'
import BootstrapVue3 from 'bootstrap-vue-3'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import mixins from '@/mixins/mixins'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const jwt_token = localStorage.getItem('jwt_token')

if (jwt_token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${jwt_token}`
}

axios.defaults.baseURL = 'https://dev.swsdf.sa/api'

// jwt_token
// user

// https://dev.swsdf.sa/api/competitions/get-competitions
// https://dev.swsdf.sa/api/competitions/get-competition/2201
// competitions/review/:id‏
// competitions/jetski-participation-application/:id‏
// competitions/freediving-participation-application/:id‏
// competitions/sport-fishing-participation-application/:id‏

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(VueAxios, axios)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
