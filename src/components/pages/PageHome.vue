<template>
  <div class="page-home" :scroll="scrollFunction">
    <!--<div id="app" v-on="scroll : onScroll">-->


    <!--<div class="bg" :style="{ 'background-image': 'url(' + assets/birke.jpg + ')' }"></div>-->
    <!--<div ref=bg class="bg" :style="{ transform: translation}"></div>-->


    <div class="entry-ctn">
      <countdown
        :deadline='24/12/2016'
      ></countdown>
    </div>


    <div class="entry-ctn">
      <mini-text></mini-text>
    </div>

    <div class="entry-ctn">
      <simple-story></simple-story>
    </div>

    <div class="entry-ctn">
      <image-viewer></image-viewer>
    </div>

    <div class="entry-ctn">
      <artist
        :scoped_player.sync=scoped_player
      ></artist>
    </div>

  </div>
</template>

<script>

  //    require('vue-scroll')

  import Hello from './../Hello';
  import Artist from './../Artist';
  import MiniText from './../MiniText';
  import SimpleStory from './../SimpleStory';
  import ImageViewer from './../ImageViewer';
  import ImageGrid from './../ImageGrid';
  import Countdown from './../Countdown';
  import Navigation from './../Navigation.vue';
  //import 'bourbon'


  export default {


    components: {
      Hello, Artist, ImageViewer, SimpleStory, ImageGrid, MiniText, Countdown, Navigation
//        Hello, ImageViewer,
//    SimpleStory
    },


    data: function () {
//            var max = 50,msgs = [],msg = 'Order';
//            while (max-- > 0) {
//                msgs.push(msg);
//            }
      return {
//                msgs: msgs,
        scrollPosition: {scrollTop: 0, scrollLeft: 0},
        scoped_player: null,
      }
    },

    methods: {
      onScroll: function (e, position) {
        console.log('scroll app', position, e)
        this.scrollPosition = position;
      },
      scrollFunction: function () {
        this.scrollPosition.scrollTop = window.scrollY;

//                let sY = window.scrollY > 0;
//                console.log('scroll Y', this.scrollPosition.scrollTop)
//
//                this.$refs.bg.style
//                this.scrolled =
      }
    },

    computed: {
      translation: function () {
        let factor = 0.2;
        return 'translateY(-' + (factor * this.scrollPosition.scrollTop) + 'px)';
      }
    },

    mounted: function () {
      console.log('app mounted', this)
      window.addEventListener('scroll', this.scrollFunction);

    }

  };

</script>

<style lang="scss">


  .page-home {
    color: #ffffff;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    font-weight: 300;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;

    position: relative;

    .component-ctn {
      display: flex;
      flex-direction: column;
      max-width: 800px;
      justify-content: center;
    }

    .bg {
      width: 100%;
      height: 100%;

      /* Create the parallax scrolling effect */
      /*background-attachment: fixed;*/
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      /*background: #131f2a url("assets/birke.jpg") no-repeat fixed center;*/

      position: absolute;
      top: 0;
      /*bottom: 0;*/
      left: 0;
      /*right: 0;*/

      /*width: 100%;*/

      background: url(../../assets/birke.jpg);
      /*background-size:cover;*/
      /*background-repeat: no-repeat;*/

      z-index: -1;
    }

  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px;

    /*<!--@include linear-gradient(to top, #8fdce5, #d17687);-->*/
    /*<!--@include filter(grayscale(50%));-->*/
  }
</style>

