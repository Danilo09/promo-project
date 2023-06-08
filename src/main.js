import './assets/main.css'

import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import router from './router'

import NotificationError from "./components/NotificationError.vue"
import LoadingPage from "./components/LoadingPage.vue"

const app = createApp(App)

app.component(
    'NotificationError', NotificationError,
    'LoadingPage', LoadingPage
)
  
app.use(store)
app.use(router)

app.mount('#app')
