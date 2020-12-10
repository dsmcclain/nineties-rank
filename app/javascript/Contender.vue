<template>
  <div :class="contenderClass" :id="`contender_${contender.id}`" @click="chooseWinner()">
    <img :src="getImage(contender.name)" v-bind:alt="`A box of ${niceName(contender.name)}`">
  </div>
</template>

<script>
import helper from '../helpers/helper.js'

export default {
  name: 'Contender',

  mixins: [helper],

  props: {
    contender: { type: Object, required: true }
  },

  data: function () {
    return {
      clicked: false
    }
  },

  computed: {
    contenderClass: function () {
      return this.clicked ? 'contender clicked' : 'contender'
    }
  },

  methods: {
    chooseWinner: function () {
      this.clicked = true
      setTimeout(() => {
        this.$emit('winner', this.contender.id)
        this.clicked = false
      }, 500)
    }
  }
}
</script>
