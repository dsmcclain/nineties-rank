<template>
  <div>
    In this component we have access to {{contenders.length}} contenders
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Results',

  computed: {
    ...mapGetters(['contenders'])
  }
}
</script>
