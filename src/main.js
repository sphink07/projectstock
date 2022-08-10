import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBY0x9qA1g0HrNDtvo4QmNUc_2qJYBhLUc",
  authDomain: "vue-login-p1.firebaseapp.com",
  projectId: "vue-login-p1",
  storageBucket: "vue-login-p1.appspot.com",
  messagingSenderId: "204983148847",
  appId: "1:204983148847:web:416aceb5c62046bfc401da"
};
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: K => K(App)
}).$mount('#app')
