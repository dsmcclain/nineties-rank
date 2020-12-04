<template>
  <div id="landing">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'landing',

  data: function () {
    return {
      message: "Hello from the landing page!"
    }
  },

  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },

  created () {
    this.increment()
  }
}
</script>
