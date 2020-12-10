<template>
  <div class="contender" :id="`contender_${contender.id}`" @click="$emit('winner', contender.id)">
    <img :src="getImage(contender.name)" v-bind:alt="`A box of ${contender.name}`">
  </div>
</template>

<script>
import helper from '../helpers/helper.js'

export default {
  name: 'Contender',

  mixins: [helper],

  props: {
    contender: { type: Object, required: true }
  }
}
</script>
