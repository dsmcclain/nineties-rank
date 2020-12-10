<template>
  <div>
    <div class="header">
      <h1>Cereal Rank</h1>
    </div>
    <div id="homepage" :class="homePageClass">
      <div v-if="!gameOver" class="game-container">
        <div v-for="(contender, index) in nextUp" :key="index" class="contender-container" :id="`cc-${index}`">
          <div><contender :contender="contender" v-on:winner="choiceMade"></contender></div>
        </div>
        <p class="center-statement">or</p>
      </div>

      <div v-if="gameOver">
        <results></results>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions }   from 'vuex'
import helper                       from '../helpers/helper.js'
import axios                        from 'axios'
import Contender                    from './Contender.vue'
import Results                      from './Results.vue'

export default {
  name: 'HomePage',

  components: { Contender, Results },

  mixins: [helper],

  data: function () {
    return {
      nextUp: [],
      pairings: [],
      gameOver: false
    }
  },

  computed: {
    ...mapGetters(['contenders']),

    homePageClass: function () {
      return this.gameOver ? 'homepage-container-with-results' : 'homepage-container'
    }
  },

  methods: {
    ...mapActions(['getContenders', 'recordResult']),

    populateContenders: async function () {
      this.passCsrfToken(document, axios)
      await this.getContenders()
      this.pairings = this.setPairings()
      this.setNext()
    },

    setNext: function () {
      const match = this.pairings.splice(0,1).flat()
      this.nextUp = match.map(id => this.contenders.find(c => c.id === id))
    },

    choiceMade: function (id) {
      this.recordResult({ winner: id, loser: this.nextUp.find(c => c.id != id).id })
      this.pairings.length > 0 ? this.setNext() : this.gameOver = true
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
