<template>
  <div>
    <table class="results-table">
      <tr>
        <th class="first-row">Rank</th>
        <th>Cereal</th>
        <th>Name</th>
        <th>Wins</th>
        <th>Losses</th>
      </tr>
      <div v-for="(contender, index) in sortedContenders" :key="contender.id">
        <tr>
          <td class="first-row">{{index + 1}}</td>
          <td><img :src="getImage(contender.name)" v-bind:alt="`A box of ${niceName(contender.name)}`"></td>
          <td>{{niceName(contender.name)}}</td>
          <td>{{contender.wins}}</td>
          <td>{{contender.losses}}</td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
import { mapGetters }  from 'vuex'
import helper          from '../helpers/helper.js'

export default {
  name: 'Results',

  mixins: [helper],

  computed: {
    ...mapGetters(['contenders']),

    sortedContenders: function () {
      return this.contenders.sort((a, b) => b.wins - a.wins)
    }
  }
}
</script>
