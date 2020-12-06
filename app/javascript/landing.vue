<template>
  <div id="landing">
    <p>{{ contenders }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { passCsrfToken } from '../helpers/helper.js'
import axios from 'axios'

export default {
  name: 'landing',

  computed: {
    ...mapGetters(['contenders'])
  },

  methods: {
    ...mapActions(['getContenders']),

    populateContenders: function () {
      passCsrfToken(document, axios)
      this.getContenders({ number: 3 })
    }
  },

  created () {
    this.populateContenders()
  }
}
</script>
