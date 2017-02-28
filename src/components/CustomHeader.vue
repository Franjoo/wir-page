<!------------------- H T M L ------------------->

<template>

  <div class="custom-header" :style="{ height: height + 'vh' }">

    <div class="img-container">
      <div class="image-wrapper">
        <div class="thumbnail" :style="{ height: height + 'vh' }">

          <!--<img :src="rootPath + '/' + album.path" alt="Image"/>-->
          <!--<img :src="rootPath + '/' + album.path" alt="Image"/>-->
          <img :src="'././static/photos/album_header/header_4.jpg'" alt="Image"/>


        </div>
      </div>

    </div>

    <!--OVERLAY-->
    <div class="shadow"></div>
    <div class="img-overlay">
      <!--<span class="icon" :class='style.iconLeft' @click='tick(false)'></span>-->
      <!--<span class="icon" :class='style.iconRight' @click='tick(true)'></span>-->
    </div>

  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

  //  import S from './SongPlayer'
  import dummy from './../dummy'

  import ImageViewer from './ImageViewer';


  // push

  export default {
    props: ['height', 'album'],


    components: {
      ImageViewer
    },

    data(){
      return {


//        a: null,
//        album: null,
        current: 0,
      };
    },

    computed: {
      rootPath: function () {


               return '././static/photos/album_' + this.album.name

       //  return '././static/photos/album_header/home/header_1.jpg'
      },

    },

    methods: {

      tick: function (right) {
        this.current = right ? this.current + 1 : this.current - 1
        if (this.current > this.a.images.length - 1) this.current = 0
        else if (this.current < 0) this.current = this.a.images.length - 1

        console.log(this.current)
      },

      startSlideshow: function () {

        let self = this
        let doDelay = ()=> {
          setTimeout(()=> {
            self.tick(true);
            doDelay()
          }, 3000)

        }

        doDelay()

      }

    },

    mounted: function () {
    }
  }



</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" rel="stylesheet/scss" scoped>

  @import "../styles/constants";
  @import "../styles/all";
  @import './../assets/font-awesome/css/font-awesome.css';

  .custom-header {
    position: fixed;
    background-color: lightsalmon;
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;

    .img-overlay {
      width: 100%;
      position: absolute;
      bottom: 0;

      display: flex;
      justify-content: space-between;

      .icon {
        font-size: 35px;
        margin: 10px;
      }

    }

    .img-container {

      display: flex;
      transition: all 0.7s ease-in-out;

      .image-wrapper {
        width: 100%;
        height: 100%;

        justify-content: center;
        align-items: center;

        .thumbnail {
          position: relative;

          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .thumbnail img {

          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;

          transform: translate(-50%, -50%);


        }
      }
    }

    .shadow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      //** box-shadow: inset 0 14px 25px -8px #191919, inset 0 -14px 25px -8px #191919;*/

    }

  }


</style>
