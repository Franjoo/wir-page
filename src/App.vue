<template>
  <div id="app">

    <hello></hello>


    <navigation></navigation>

    <countdown
      :deadline='24/12/2016'
    ></countdown>

    <mini-text></mini-text>

    <!--<image-grid></image-grid>-->

    <simple-story></simple-story>

    <image-viewer></image-viewer>

    <artist
      :scoped_player.sync=scoped_player
    ></artist>

  </div>
</template>

<script>
  import Hello from './components/Hello';
  import Artist from './components/Artist';
  import MiniText from './components/MiniText';
  import SimpleStory from './components/SimpleStory';
  import ImageViewer from './components/ImageViewer';
  import ImageGrid from './components/ImageGrid';
  import Countdown from './components/Countdown';
  import Navigation from './components/Navigation.vue';
  //import 'bourbon'


  export default {
    components: {
      Hello, Artist, ImageViewer, SimpleStory, ImageGrid, MiniText, Countdown, Navigation
//        Hello, ImageViewer,
//    SimpleStory
    },
    data: function () {
      return {
        scoped_player: null
      }
    }
  };
</script>

<style lang="scss">

  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #app {
    color: #ffffff;
    /*margin-top: 100px;*/
    max-width: 600px;

    font-family: Source Sans Pro, Helvetica, sans-serif;
    font-weight: 300;


    height: 100%;
    flex-direction: column;


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
