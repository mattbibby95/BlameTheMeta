import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleRight } from '@fortawesome/free-regular-svg-icons'
library.add(faCircleRight);


const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
