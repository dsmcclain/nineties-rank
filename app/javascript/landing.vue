<template>
  <div id="landing" class="landing-container">
    <div v-for="(contender, index) in nextUp" :key="index" class="contender-container" :id="`cc-${index}`">
      <div><contender :contender="contender"></contender></div>
    </div>
    <p class="center-statement">or</p>
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
