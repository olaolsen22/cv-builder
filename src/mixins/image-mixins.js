export const imagesMixins = {
  methods: {
    getImageLocally (path) {
      var images = require.context('@/assets/images/', false)
      return images('./' + path)
    }
  }
}