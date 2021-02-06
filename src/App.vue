<template lang="pug">
.main-page
  p Sample content
  .left-panel
    

</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">

p, span, label {
  font-size: 11pt;
}

@media print {
  body {
    margin: 0;
    visibility: hidden;
  }
  .main-page { visibility: visible; }
}
html {
  background-color: #eeeeee;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-page {
  min-width: 8.5in;
  min-height: 11in;
  background-color: #ffffff;
  outline: 1px solid red;
  .left-panel {
    height: 100%;
  }
}

</style>
