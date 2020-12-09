<template>
  <div class="contender" :id="`contender_${contender.id}`" @click="$emit('winner', contender.id)">
    <img :src="getImage()" v-bind:alt="`A box of ${contender.name}`">
  </div>
</template>

<script>

export default {
  name: 'contender',

  props: {
    contender: { type: Object, required: true }
  },

  methods: {
    getImage: function () {
      return require(`../assets/images/${this.contender.name}.png`)
    }
  }
}
</script>
