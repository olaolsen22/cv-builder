<template lang="pug">
img(v-bind:src='getImageLocally(imageLink)')
</template>

<script>
// Mixins
import { imagesMixins } from '@/mixins/image-mixins.js'

export default {
  mixins: [imagesMixins],
  props: {
    imageLink: {
      type: String,
      default: 'blank_profile.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 2in;
  height: 2in;
  border: .05in solid #d3a74a;
  border-radius: .15rem;
}
</style>