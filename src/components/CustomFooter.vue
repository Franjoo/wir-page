<!------------------- H T M L ------------------->

<template>
  <div class="custom-footer">
    custom footer
  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

  //  import S from './SongPlayer'
  //  import dummy from './../dummy'

  export default {
    props: [],

    components: {},

    data(){
      return {};
    }
  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" scoped>

  .custom-footer {
    position: fixed;
    bottom: 0;

    color: white;
    background-color: lightsalmon;
    width: 100%;
    height: 200px;

    z-index: -1;
  }

</style>
