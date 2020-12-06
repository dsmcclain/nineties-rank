<template>
  <div id="landing">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { passCsrfToken } from '../helpers/helper.js'
import axios from 'axios'

export default {
  name: 'landing',

  data: function () {
    return {
      message: "Hello from the landing page!"
    }
  },

  methods: {
    populateContenders() {
      passCsrfToken(document, axios)
      this.$store.dispatch('getContenders', { number: 1 })
      console.log(this.$store.state)
    }
  },

  created () {
    this.populateContenders()
  }
}
</script>
