<!------------------- H T M L ------------------->

<template>
  <div class="image-viewer blog" :style="{ height: height + 'px' }">

    <!--IMAGE ROW-->
    <div class="image-row">
      <div v-for="(i, index) in a.images" class="img-container" :style="{ transform: translation}">
        <div class="image-wrapper">
          <div class="thumbnail" :style="{ height: height + 'px' }">
            <!--<img :src="'./../assets/photos/album_demo/' + i.path" alt="Image"/>-->
            <img :src="rootPath + '/' + i.path" alt="Image"/>
            <!--<img :src="" alt="Image"/>-->
            <!--<img src='./../assets/eric.jpg' alt="Image"/>-->
            <!--<img src="'./../assets/eric.jpg'" alt="Image"/>-->
            <!--<img :src="'./static/img/' + i.path" alt="Image"/>-->
          </div>
        </div>
      </div>

    </div>

    <!--OVERLAY-->
    <div class="shadow"></div>
    <div class="img-overlay">
      <span class="icon" :class='style.iconLeft' @click='tick(false)'></span>
      <span class="icon" :class='style.iconRight' @click='tick(true)'></span>
    </div>

  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

  //    import S from './SongPlayer'
  import dummy from './../dummy'
  //  require('./../assets/photos/album_demo/*')
  //  import './../assets/photos/album_demo'
  //
  //      var req = require.context("../assets/photos/album_demo", true, /^(.*\.(jpg$))[^.]*$/igm);
  //  //    var req = require.context("../assets/photos/album_demo", true);
  //      req.keys().forEach(function(key){
  //        req(key);
  //      });

  export default {
    props: ['album', 'slideshow', 'height'],


    components: {},

    data(){
      return {
        timer: null,
        current: 0,
        a: dummy.album,
        style: {
          iconRight: 'fa fa-arrow-circle-right ',
          iconLeft: 'fa fa-arrow-circle-left ',
        },

      };

    },

    computed: {
      rootPath: function () {
        return './static/photos/album_' + this.a.name
      },

      translation: function () {
        let current = this.current * this.height
        return 'translateY(-' + current + 'px)';
      }
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


//
//      left: function () {
//
//        this.current--
//        if (this.current < 0) this.current = this.a.images.length - 1;
//
//
//        console.log(this.$els.row.style.transform)
//        this.$els.row.style.transform = 'translateX(560px)'
//
//      },
//
//      right: function () {
//        console.log(this.$els.row.style.transform)
//
//        this.$els.row.style.transform = 'translateX(-560px)'
//      },


    },

    mounted: function () {

      var self = this

      this.a = this.album || this.a

      if(this.slideshow) self.startSlideshow();

    }

  }
</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" rel="stylesheet/scss" scoped>

  @import "../styles/constants";
  @import './../assets/font-awesome/css/font-awesome.css';

  .image-viewer {


    background-color: lightsalmon;
    height: 200px;
    position: relative;

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

    .image-row {

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: auto;

      /*background-color: #2c3e50;*/

      display: flex;
      flex-direction: column;

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
            width: auto;

            transform: translate(-50%, -50%);

          }
        }
      }
    }

    .shadow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      /*<!--box-shadow: 0 -3px 6px #191919;-->*/
      /*<!--box-shadow: inset 0 8px 8px -8px #696868, inset 0 -8px 8px -8px #696868;-->*/
      box-shadow: inset 0 14px 25px -8px #191919, inset 0 -14px 25px -8px #191919;

    }

  }
</style>
