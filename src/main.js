import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from './components/Shared/BuyModal'
import * as frb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('buy-modal', BuyModalComponent)

Vue.config.productionTip = false
Vue.config.performance = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    frb.initializeApp({
      apiKey: 'AIzaSyA9X4wHAUlUlwDvKug3fYUPdgNP4RQDpZ0',
      authDomain: 'vue-dashboard-97518.firebaseapp.com',
      databaseURL: 'https://vue-dashboard-97518.firebaseio.com',
      projectId: 'vue-dashboard-97518',
      storageBucket: 'vue-dashboard-97518.appspot.com',
      messagingSenderId: '862156257964'
    })
    frb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
