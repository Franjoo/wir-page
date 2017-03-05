<template>
  <div id="app">

    <!-- DEVELOPMENT WRAPPER -->
    <div v-if='comingPageRoute' class="development-ctn">
      coming soon
    </div>


    <!-- PRODUCTION WRAPPER -->
    <div v-if='!comingPageRoute' class="production-ctn">

      <custom-header
        :height=headerHeight
        :album=headerAlbum
        :img=headerImage
      ></custom-header>


      <div class="component-ctn" :style="{ marginTop: marginForHeader + 'vh' }">
        <!--<div class="component-ctn">-->
        <navigation
          :marginForHeader=headerHeight
        >
        </navigation>

        <div class="gradient-overlay"></div>

        <router-view class="blog-column" transition="fade" transition-mode="out-in"></router-view>
      </div>

      <!--<img :src="'././static/dummy.svg'" alt="Image"/>-->

      <custom-footer></custom-footer>

    </div>
  </div>
</template>

<script>

  //  import env from './env'
  import Navigation from './components/Navigation';
  import CustomHeader from './components/CustomHeader.vue';
  import CustomFooter from './components/CustomFooter.vue';

  import dummy from './dummy'


  export default {

    components: {
      Navigation, CustomHeader, CustomFooter
    },

    data: function () {
      return {
        headerAlbum: dummy.headerAlbums['home'],
        headerImage: '',
        marginForHeader: 0,
        headerHeight: 0,
        dev: true,
        scoped_player: null,
        scrollPosition: {
          scrollTop: 0,
          scrollLeft: 0
        },
      }
    },

    methods: {
      onScroll: function () {
        this.scrollPosition.scrollTop = window.scrollY;
        this.scrollPosition.scrollLeft = window.scrollX;
//                console.log('on scroll',
//                        this.scrollPosition.scrollTop,
//                        this.scrollPosition.scrollLeft)
      }
    },

    computed: {
      translation: function () {
        let factor = 0.2;
        return 'translateY(-' + (factor * this.scrollPosition.scrollTop) + 'px)';
      },

      comingPageRoute: function () {
        return this.$route.fullPath === "/"
      },

      headerAlbum: function () {
        return 'home'
//        return this.$route.fullPath
      }
    },

    mounted: function () {
      console.log('app mounted', this, document)
//      this.dev = env.dev
//            window.addEventListener('scroll', this.onScroll)


      // this.headerHeight = this.marginForHeader = window.height
      //  console.log('screenheight', this.headerHeight)

      this.headerHeight = this.marginForHeader = 70

    }, beforeUpdate: function () {

      if (this.$route.name === 'home') {
        this.headerImage = 'header_1.jpg'
      }

      else if (this.$route.name === 'music') {
        this.headerImage = 'header_2.jpg'
      }

      else if (this.$route.name === 'about') {
        this.headerImage = 'header_3.jpg'
      }
    }

  };


</script>

<style lang="scss" rel="stylesheet/scss">

  @import 'styles/all';
  @import 'styles/patternbolt';

  html {
    height: 100%;

    body {
      margin: 0 !important;
      pointer-events: none;

      #app {

        color: white;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        font-weight: 100;

        /*pointer-events: none;*/

        .development-ctn {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          overflow: auto;
          background-color: #2b2b2b;
          font-size: 3em;
          letter-spacing: 3px;
          display: flex;

          flex-direction: column;
          width: 100%;
          justify-content: center;
          align-items: center;

        }

        .production-ctn {

          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          align-items: center;

          /*pointer-events: none;*/

          .header {

            width: 100%;
            background: darkgreen;
            height: 200px;
          }

          .component-ctn {

            /*background pattern*/
            /*// $pattern: 'lines-45-b';*/
            /*// $pattern: 'feather';*/
            $pattern: 'candy-a';
            $background-size: 400px;


            /*@mixin pb($pattern, $background-size, $background-color, $foreground-color, $opacity, $mask){}-->*/

            // @include pb($pattern, $background-size, $background-color, $foreground-color);
           // @include pb($pattern, $background-size, $c-bg-foreground, $c-bg-background);
            @include pb($pattern, $background-size, $c-bg-background, #191919);

            width: 100%;
            pointer-events: all;

            display: flex;
            flex-direction: column;
            align-items: center;

            margin-bottom: 280px;
            /*margin-top: 300px;*/

            background-color: $c-bg-background;

            .gradient-overlay{
              /*background-color: blue;*/
              width: 100%;
              height: 200vh;
              position: absolute;
              top:0;
              left: 0;
              display: none;

              background: linear-gradient($c-bg-foreground, rgba($c-bg-foreground, 0));
            //  background: linear-gradient(rgba($c-bg-foreground, 0.1), rgba($c-bg-foreground, 0.1));
            }

            .blog-column {
              pointer-events: all;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              padding: 20px;

              // background-color: $c-shadow;

              // border: 5px solid $foreground-color;

            }

          }

        }

        .blog-column {
          width: 100%;
          margin-bottom: 40px;

          @media #{$sm}{
            width: $sm-bp
          }

          @media #{$md}{
            width: $md-bp
          }

          @media #{$lg}{
            width: $md-bp
          }
        }

      }
    }
  }

</style>
