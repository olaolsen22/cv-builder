<template lang="pug">
.skills
  .skill(v-for='(skill, index) in skills')
    p {{skill.title}}
    p {{skill.content}}
</template>

<script>
// Mixins

export default {
  props: {
    skills: {
      type: Array,
      default: function () {
        return [{title: 'skill title', content: 'X Years'}]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-direction: column;
  .skill {
    display: flex;
    justify-content: space-between;
    p {
      margin-top: .5rem;
    }
  }
}
</style>