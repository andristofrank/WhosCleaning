/* eslint-disable quotes */
/* eslint-disable semi */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import BoostrapVue from "bootstrap-vue";
import firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BoostrapVue);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

const firebaseConfig = {
  apiKey: "AIzaSyD0A2NLFvxMTSNwc6XmsoEUisHgydXNCM4",
  authDomain: "whoiscleaning.firebaseapp.com",
  databaseURL: "https://whoiscleaning.firebaseio.com",
  projectId: "whoiscleaning",
  storageBucket: "whoiscleaning.appspot.com",
  messagingSenderId: "5249139646",
  appId: "1:5249139646:web:0510ed72ff21fdd6ef2fef",
  measurementId: "G-26S82B7NJ1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
