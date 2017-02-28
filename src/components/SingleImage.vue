<!------------------- H T M L ------------------->

<template>
  <div class="single-image">
    <img :src="'././static/photos/album_header/header_3.jpg'" alt="Image"/>

  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

//  import S from './SongPlayer'
//  import dummy from './../dummy'

  export default {
    props: [],

    components: {
    },

    data(){
      return {};
    }
  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" rel="stylesheet/scss" scoped>

  .single-image {
    background-color: transparent;
    /*margin: 0 !important;*/

    img {
      object-fit: cover;
      width: 100%;
      margin:0
    }
  }
</style>
