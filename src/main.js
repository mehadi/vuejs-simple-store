import Vue from 'vue'
import App from './App.vue'

window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

import router from './router'

import Vuex from 'vuex'

Vue.use(Vuex)
import {storage} from "./store/index";

const store = new Vuex.Store(storage)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
