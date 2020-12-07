<template>
  <div id="landing">
    <div v-for="contender in nextUp" :key="contender.id">
      <li><contender :contender="contender"></contender></li>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions }   from 'vuex'
import { passCsrfToken }            from '../helpers/helper.js'
import axios                        from 'axios'
import contender                    from './contender.vue'

export default {
  name: 'landing',

  components: { contender },

  data: function () {
    return {
      nextUp: []
    }
  },

  computed: {
    ...mapGetters(['contenders'])
  },

  methods: {
    ...mapActions(['getContenders']),

    populateContenders: async function () {
      passCsrfToken(document, axios)
      await this.getContenders({ number: 2 })
      this.setNext()
    },

    setNext: function () {
      this.nextUp = this.contenders.slice(0,2)
    }
  },

  created () {
    this.populateContenders()
  }
}
</script>
