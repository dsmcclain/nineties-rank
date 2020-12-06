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
    populateContenders() {
      this.$store.dispatch('getContenders')
      console.log(this.$store.state)
    }
  },

  created () {
    this.populateContenders()
  }
}
</script>
