/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'vue' %> (and
// <%= stylesheet_pack_tag 'vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import Vuex from 'vuex'
import store from '../vuex/store/store.js'
import App from '../App.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    store: store,

    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)
})
