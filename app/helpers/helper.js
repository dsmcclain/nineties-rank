export default {
  methods: {
    csrfToken(document) {
      return document.querySelector('[name="csrf-token"]').content
    },

    passCsrfToken(document, axios) {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = this.csrfToken(document)
    },

    getImage(name) {
      return require(`../assets/images/${name}.png`)
    }
  }
}
