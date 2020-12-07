<template>
  <div :id="`contender_${contender.id}`">
    <p>{{ contender.name }}</p>
  </div>
</template>

<script>

export default {
  name: 'contender',

  props: {
    contender: { type: Object, required: true }
  }
}
</script>
