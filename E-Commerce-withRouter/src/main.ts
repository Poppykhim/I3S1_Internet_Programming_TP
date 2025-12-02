import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router' // Import the specific icons you want

//icon
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser as user } from '@fortawesome/free-solid-svg-icons'
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons'
import { faHeart as heart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart as cart } from '@fortawesome/free-solid-svg-icons'
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'

// Add to the library
library.add(faMagnifyingGlass)
library.add(user)
library.add(faArrowsSpin)
library.add(heart)
library.add(cart)
library.add(faTableCellsLarge)
library.add(faAngleDown)
library.add(faFire)
library.add(faHeadphones)
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
