<template>
  <div id="app">
    <span>Coming Soon</span>
  </div>
</template>


<script>

  export default {

    components: {},

    data: function () {
      return {
        dev: true
      }

    },

    mounted: function () {
      console.log('coming mounted', this)
    }

  }

</script>

<style lang="scss">

  html {
    height: 100%;
  }

  body {

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    background-color: #2b2b2b;
    color: white;
    font-size: 3em;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    font-weight: 100;
    letter-spacing: 3px;

  }

  #coming {

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

  }

</style>
