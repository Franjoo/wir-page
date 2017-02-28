<!------------------- H T M L ------------------->

<template>
  <div class="single-video">
    <div class="single-video-wrapper">
      <video controls>
        <source :src="'././static/photos/album_demo/renata.mp4'" type="video/mp4">
        <!--<source src="mov_bbb.ogg" type="video/ogg">-->
        Your browser does not support HTML5 video.
      </video>
    </div>
  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

  export default {
    props: ['path'],

    components: {},

    data(){
      return {};
    }
  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" rel="stylesheet/scss" scoped>

  .single-video {



    .single-video-wrapper {
      display: inline-block;
      position: relative;
      width: 100%;

      &:after {
        padding-top: 56.25%;
        display: block;
        content: '';
      }

      video {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        /* fill parent */
        background-color: deepskyblue;
        /* let's see it! */
        color: white;
      }
    }
  }
</style>
