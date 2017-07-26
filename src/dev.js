import Vue from 'vue'
import Dev from './components/dev.vue'


Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {Dev},
  data () {
    return {}
  },
  methods: {
    _click1(){
      console.log('button');
    }
  },
  render: function (createElement) {
    return createElement('div', [
      createElement(Dev),
    ])
  }
});
