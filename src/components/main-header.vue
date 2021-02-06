<template lang="pug">
.banner
  .left-section
    p.name {{name}}
    p.job-title {{jobTitle}}
  .right-section
    .contact-detail
      font-awesome-icon(icon="phone-alt")
      .phone-container
        a.test(v-for="number in phone" href=`tel:${number}`) 
          p {{number}}
    a.contact-detail(href='mailto:olaolsen22@gmail.com')
      font-awesome-icon(icon="envelope")
      p {{email}}
    .contact-detail
      font-awesome-icon(icon="map-marker-alt")
      a(target='_blank' :href='address.link')
        p {{address.address}}
    a.contact-detail(href='https://www.linkedin.com/in/ola-olsen-442b07a3/' target='_blank')
      font-awesome-icon(:icon='["fab", "linkedin"]')
      p {{linkedIn}}

</template>

<script>
// Mixins

export default {
  props: {
    name: {
      type: String,
      default: 'Jon Doe'
    },
    jobTitle: {
      type: String,
      default: 'Accountant'
    },
    phone: {
      type: Array,
      default: function () {
        return []
      }
    },
    email: {
      type: String,
      default: 'Jon Doe'
    },
    address: {
      type: Object
    },
    linkedIn: {
      type: String,
      default: 'Jon Doe'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

p { margin: 0; }

a {
  color: #ffffff;
  text-decoration: none;
  p {
    font-size: 8pt !important;
  }
  &:hover { font-weight: bold; }
}

.phone-container {
  display: flex;
  flex-direction: column;
}

.banner {
  display: flex;
  height: 8rem;
  margin-top: 1rem;
  background-color: $primary-color;
  color: #ffffff;
  padding: 1rem;
  .left-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    height: 100%;
    padding-left: .5rem;
    .name { 
      font-size: 24pt;
      text-transform: uppercase;
      font-weight: bold;
    }
    .job-title {
      font-size: 16pt;
      font-weight: 100;
    }
  }
  .right-section {
    display: flex;
    padding-left: 2rem;
    flex-direction: column;
    justify-content: center;
    max-width: 40%;
    border-left: solid 1pt #ffffff;
    white-space: break-spaces;
    .contact-detail {
      display: flex;
      align-items: center;
      margin: .35rem 0;
      svg {
        max-width: 9pt;
        margin-right: .75rem;
      }
    }
  }
}
</style>