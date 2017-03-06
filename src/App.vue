<template>
  <div id="app">


    <!-- DEVELOPMENT WRAPPER -->
    <div v-if='comingPageRoute' class="development-ctn">
      coming soon
    </div>


    <!-- PRODUCTION WRAPPER -->
    <!--<div v-if='!comingPageRoute' class="production-ctn">-->



      <div class="parallax">
        <div id="group1" class="parallax__group">
          <div class="parallax__layer parallax__layer--base">
            <div class="title">Base Layer</div>
          </div>
        </div>
        <div id="group2" class="parallax__group">
          <div class="parallax__layer parallax__layer--base">
            <div class="title">Base Layer</div>
          </div>
          <div class="parallax__layer parallax__layer--back">
            <div class="title">Background Layer</div>
          </div>
        </div>
        <div id="group3" class="parallax__group">
          <div class="parallax__layer parallax__layer--fore">
            <div class="title">Foreground Layer</div>
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div class="title">Base Layer</div>
          </div>
        </div>
        <div id="group4" class="parallax__group">
          <div class="parallax__layer parallax__layer--base">
            <div class="title">Base Layer</div>
          </div>
          <div class="parallax__layer parallax__layer--back">
            <div class="title">Background Layer</div>
          </div>
          <div class="parallax__layer parallax__layer--deep">
            <div class="title">Deep Background Layer</div>
          </div>
        </div>
        <div id="group5" class="parallax__group">
          <div class="parallax__layer parallax__layer--fore">
            <div class="title">Foreground Layer</div>
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div class="title">Base Layer</div>
          </div>
        </div>
        <div id="group6" class="parallax__group">
          <div class="parallax__layer parallax__layer--back">
            <div class="title">Background Layer</div>
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div class="title">Base Layer</div>
          </div>
        </div>
        <div id="group7" class="parallax__group">
          <div class="parallax__layer parallax__layer--base">
            <div class="title">Base Layer</div>
          </div>
        </div>
      </div>




















      <!--<div class="parallax">-->


        <!--<div id="group1" class="pl-group">-->

          <!--<div class="pll pl-back">-->
            <!--<custom-header-->
            <!--:height=100-->
            <!--:album=headerAlbum-->
            <!--:img=headerImage-->
            <!--&gt;</custom-header>-->
          <!--</div>-->

        <!--</div>-->


        <!--<div id="group2" class="pl-group">-->
          <!--<div class="pll pll-deep">-->
            <!--<div class="bg-pattern"></div>-->
          <!--</div>-->

          <!--<div class="pll pl-base">-->

            <!--<div class="component-ctn">-->
              <!--&lt;!&ndash;<navigation :marginForHeader='0'></navigation>&ndash;&gt;-->
              <!--<div class="gradient-overlay"></div>-->
              <!--<router-view class="blog-column" transition="fade" transition-mode="out-in"></router-view>-->
            <!--</div>-->

          <!--</div>-->
        <!--</div>-->


        <!--<div id="group3" class="pl-group">-->


        <!--</div>-->
        <!--<div class="pll pl-back">-->
          <!--<custom-footer class="pll-deep"></custom-footer>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div id="group3" class="pl-group">-->
      <!--<div class="pll pll&#45;&#45;fore">-->
      <!--<div class="title">Foreground Layer</div>-->
      <!--</div>-->
      <!--<div class="pll pll&#45;&#45;base">-->
      <!--<div class="title">Base Layer</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div id="group4" class="pl-group">-->
      <!--<div class="pll pll&#45;&#45;base">-->
      <!--<div class="title">Base Layer</div>-->
      <!--</div>-->
      <!--<div class="pll pll&#45;&#45;back">-->
      <!--<div class="title">Background Layer</div>-->
      <!--</div>-->
      <!--<div class="pll pll&#45;&#45;deep">-->
      <!--<div class="title">Deep Background Layer</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div id="group5" class="pl-group">-->
      <!--<div class="pll pll&#45;&#45;fore">-->
      <!--<div class="title">Foreground Layer</div>-->
      <!--</div>-->
      <!--<div class="pll pll&#45;&#45;base">-->
      <!--<div class="title">Base Layer</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div id="group6" class="pl-group">-->
      <!--<div class="pll pll&#45;&#45;back">-->
      <!--<div class="title">Background Layer</div>-->
      <!--</div>-->
      <!--<div class="pll pll&#45;&#45;base">-->
      <!--<div class="title">Base Layer</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div id="group7" class="pl-group">-->
      <!--<div class="pll pll&#45;&#45;base">-->
      <!--<div class="title">Base Layer</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->

    <!--</div>-->
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
      /*pointer-events: none;*/

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

          .bg-pattern {
            $pattern: 'candy-a';
            $background-size: 400px;
            @include pb($pattern, $background-size, $c-bg-background, #191919);
          }

          /*pointer-events: none;*/

          .header {

            width: 100%;
            background: darkgreen;
            height: 200px;
          }

          .component-ctn {

            width: 100%;
            pointer-events: all;

            display: flex;
            flex-direction: column;
            align-items: center;

            margin-bottom: 280px;
            /*margin-top: 300px;*/

            // background-color: $c-bg-background;

            .gradient-overlay {
              /*background-color: blue;*/
              width: 100%;
              height: 200vh;
              position: absolute;
              top: 0;
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

      #app {

        .parallax {
          height: 100vh;
          overflow-x: hidden;
          overflow-y: auto;
          perspective: 300px;
          perspective-origin-x: 100%;
          -webkit-perspective-origin-x: 100%;


          .parallax__group {
            position: relative;
            height: 100vh;
            transform-style: preserve-3d;


            .parallax__layer {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              -webkit-transform-origin-x: 100%;
              transform-origin-x: 100%;
            }


            .parallax__layer--fore {
              transform: translateZ(90px) scale(.7);
              z-index: 1;
            }

            .parallax__layer--base {
              transform: translateZ(0);
              z-index: 4;
            }

            .parallax__layer--back {
              transform: translateZ(-300px) scale(2);
              z-index: 3;
            }

            .parallax__layer--deep {
              transform: translateZ(-600px) scale(3);
              z-index: 2;
            }

          }

          .title {
            text-align: center;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }

          #group1 .parallax__layer--base {
            background: rgb(102,204,102);
          }

          #group2 .parallax__layer--back {
            background: rgb(123,210,102);
          }

          #group3 .parallax__layer--base {
            background: rgb(153,216,101);
          }

          #group4 .parallax__layer--deep {
            background: rgb(184,223,101);
          }

          #group5 .parallax__layer--base {
            background: rgb(214,229,100);
          }

          #group6 .parallax__layer--back {
            background: rgb(245,235,100);
          }

          #group7 .parallax__layer--base {
            background: rgb(255,241,100);
          }


        }
      }
    }

  }

</style>
