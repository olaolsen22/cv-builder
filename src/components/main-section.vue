<template lang="pug">
.main-section-content
  .main-section-panels
    .main-left-panel
      p.title {{data.title}}
      p {{data.length}}
    .main-right-panel
      p.title(:class='{"special-margin": !data.hasOwnProperty("keyPoints")}') {{data.company}}
      .key-point(v-for='point in data.keyPoints')
        p.bullet - 
        p {{point}}


</template>

<script>
// Mixins
import { imagesMixins } from '@/mixins/image-mixins.js'

export default {
  mixins: [imagesMixins],
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

p { margin: 0 }

.main-section-content {
  padding-top: 0;
  .main-section-panels {
    display: flex;
    padding: 0 .35rem;
    margin-top: .5rem;
    .title {
      font-size: 12pt;
      font-weight: bold;
      margin-bottom: .35rem;
      &.special-margin { 
        margin-top: .2rem;
        margin-bottom: 0;
      }
    }
    .main-left-panel {
      min-width: 11rem;
      max-width: 11rem;
    }
    .main-right-panel {
      display: flex;
      flex-direction: column;
      padding-left: 1rem;
      padding-right: .5rem;
      justify-content: center;
      .key-point {
        display: flex;
        margin-bottom: .25rem;
        .bullet { margin-right: .35rem; }
      }
  }
  }
}
</style>