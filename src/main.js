import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { init } from 'emailjs-com';

init("user_E9yN93jeeFx5OLeuUs49k");


Vue.use(VueParticles)


new Vue({
  created() {
    AOS.init()
  },
  render: h => h(App)
}).$mount(`#app`);
