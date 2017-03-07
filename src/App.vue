<template>
  <div id="app">


    <!-- DEVELOPMENT WRAPPER -->
    <div v-if='comingPageRoute' class="development-ctn">
      coming soon
    </div>


    <!-- PRODUCTION WRAPPER -->
    <div v-if='!comingPageRoute' class="production-ctn">


      <!--GROUP TEMPLATE-->

      <!--<div id="groupX" class="pl-group">-->
      <!--<div class="pl-layer pl&#45;&#45;fore">-->
      <!--&lt;!&ndash;<div class=""</div>&ndash;&gt;-->
      <!--</div>-->
      <!--<div class="pl-layer pl&#45;&#45;base">-->
      <!--&lt;!&ndash;<div class=""</div>&ndash;&gt;-->
      <!--</div>-->
      <!--<div class="pl-layer pl&#45;&#45;back">-->
      <!--&lt;!&ndash;<div class=""</div>&ndash;&gt;-->
      <!--</div>-->
      <!--<div class="pl-layer pl&#45;&#45;deep">-->
      <!--&lt;!&ndash;<div class=""</div>&ndash;&gt;-->
      <!--</div>-->
      <!--</div>-->


      <div class="parallax debug">

        <!--<div id="group0" class="pl-group">-->
        <!--<div class="pl-layer pl&#45;&#45;back pl-pattern"></div>-->
        <!--</div>-->

        <div id="group0" class="pl-group group-pattern">
          <div class="pl-layer pl--back pl-pattern"></div>
        </div>


        <div id="group1" class="pl-group">


          <!-- B A C K -->
          <div class="pl-layer pl--deep pl-header">
            <!--<div class="title">Base Layer</div>-->

            <!--<div class="pl-layer pl&#45;&#45;back pl-pattern"></div>-->


            <custom-header
              :height=100
              :album=headerAlbum
              :img=headerImage
            ></custom-header>

          </div>

        </div>


        <div id="group2" class="pl-group">

          <!-- B A S E-->
          <div class="pl-layer pl--base pl-main">

            <div class="component-ctn">
              <navigation :marginForHeader='0'></navigation>
              <div class="gradient-overlay"></div>
              <router-view class="blog-column" transition="fade" transition-mode="out-in"></router-view>
            </div>

          </div>

        </div>


        <!---->
        <!---->
        <!--<div id="group4" class="pl-group">-->
        <!--<div class="pl-layer pl&#45;&#45;base">-->
        <!--&lt;!&ndash;<div class="title">Base Layer</div>&ndash;&gt;-->
        <!--<custom-footer></custom-footer>-->

        <!--</div>-->
        <!--</div>-->


      </div>
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

          /*display: flex;*/
          /*flex-direction: column;*/
          /*width: 100%;*/
          /*justify-content: center;*/
          /*align-items: center;*/

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

          .pl-group {
            /*position: relative;*/
            /*height: 100vh;*/
            transform-style: preserve-3d;

            .pl-layer {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              -webkit-transform-origin-x: 100%;
              transform-origin-x: 100%;
            }

            .pl--fore {
              transform: translateZ(90px) scale(.7);
              z-index: 2;
            }

            .pl--base {
              // transform: translate3D(0, -300px, 0);
              transform: translate3D(0, 0, 0);
              z-index: 0;
            }

            .pl--back {
              transform: translateZ(-300px) scale(2);
              z-index: -2;
            }

            .pl--deep {
              transform: translateZ(-600px) scale(3);
              z-index: -5;
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

          &.debug {

            /*#group1 .pl--base {*/
            /*background: rgb(102, 204, 102);*/
            /*}*/

            /*#group2 .pl--back {*/
            /*background: rgb(123, 210, 102);*/
            /*}*/

            /*#group3 .pl--base {*/
            /*background: rgb(153, 216, 101);*/
            /*}*/

            /*#group4 .pl--deep {*/
            /*background: rgb(184, 223, 101);*/
            /*}*/

            /*#group5 .pl--base {*/
            /*background: rgb(214, 229, 100);*/
            /*}*/

            /*#group6 .pl--back {*/
            /*background: rgb(245, 235, 100);*/
            /*}*/

            /*#group7 .pl--base {*/
            /*background: rgb(255, 241, 100);*/
            /*}*/

            .pl--fore {
              background-color: #adb957;
            }

            .pl--base {
              background-color: #b93d47;
            }

            .pl--back {
              background-color: #5e8eb9;
            }

            .pl--deep {
              /*background-color: #342ab9;*/
            }

            .pl-header {
              height: 200vh;
              z-index: 5;
            }

            .pl-main {
              background-color: inherit;
              height: 200vh;
              z-index: 3;

            }

            .group-pattern {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 10933px;

              .pl-pattern {
                height: 5000px;
                /*bottom: 0;*/
                /*top: auto;*/
                /*z-index: 10;*/

                /*transform: translateY(600px);*/

                $pattern: 'candy-a';
                $background-size: 400px;
                @include pb($pattern, $background-size, $c-bg-background, #191919);

              }

            }

          }

        }
      }
    }

  }

</style>
