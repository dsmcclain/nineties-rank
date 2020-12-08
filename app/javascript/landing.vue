<template>
  <div id="landing" class="landing-container">
    <div v-for="(contender, index) in nextUp" :key="index" class="contender-container" :id="`cc-${index}`">
      <div><contender :contender="contender" v-on:winner="choiceMade"></contender></div>
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
      nextUp: [],
      pairings: []
    }
  },

  computed: {
    ...mapGetters(['contenders'])
  },

  methods: {
    ...mapActions(['getContenders', 'recordResult']),

    populateContenders: async function () {
      passCsrfToken(document, axios)
      await this.getContenders({ number: 5 })
      this.pairings = this.setPairings()
      this.setNext()
    },

    setNext: function () {
      const match = this.pairings.splice(0,1).flat()
      this.nextUp = match.map(id => this.contenders.find(c => c.id === id))
    },

    choiceMade: function (id) {
      this.recordResult({ winner: id, loser: this.nextUp.find(c => c.id != id).id })
      console.log(id)
      this.pairings.length > 0 ? this.setNext() : console.log('game over!')
    },

    setPairings: function () {
      const pairings = []
      let players = this.contenders.map(c => c.id)
      if (players.length % 2 == 1) {
        players.push(null)
      }

      const rounds = players.length - 1
      const half = players.length / 2
      const playerIndexes = players.map((_, i) => i).slice(1)

      for (let round = 0; round < rounds; round++) {
        const newIndexes = [0].concat(playerIndexes)
        const firstHalf = newIndexes.slice(0, half)
        const secondHalf = newIndexes.slice(half, players.length).reverse()

        for (let i = 0; i < firstHalf.length; i++) {
          const pairing = [players[firstHalf[i]], players[secondHalf[i]]]
          if (!pairing.includes(null)) { pairings.push(pairing) }
        }

        playerIndexes.push(playerIndexes.shift())
      }

      return pairings
    },
  },

  created () {
    this.populateContenders()
  }
}
</script>
