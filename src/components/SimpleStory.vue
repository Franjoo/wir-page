<!------------------- H T M L ------------------->

<template>
  <div class="simple-story">
    <span class="title">{{s.title}}</span>
    <div class='story-ctn'>
      <div class="content-ctn" v-for="(index, c) in s.content">
        <span class='text' v-if='c.text'>{{c.text}}</span>
        <span class='head' v-if='c.head'>{{c.head}}</span>

        <div v-if='c.img' class="image-wrapper">

          <div class="thumbnail" :style="{'padding-bottom': paddingBottom(c.ar)}">
            <img :src="path + c.img" alt="Image"/>
            <!--<img :src="" alt="Image"/>-->
            <!--<img src='./../assets/eric.jpg' alt="Image"/>-->
            <!--<img src="'./../assets/eric.jpg'" alt="Image"/>-->
            <!--<img :src="'./static/img/' + i.path" alt="Image"/>-->
          </div>

        </div>

        <video v-if='c.video' width="560" controls>
          <source :src="path + c.video" type="video/mp4">
          <!--<source src="mov_bbb.ogg" type="video/ogg">-->
          Your browser does not support HTML5 video.
        </video>

      </div>



    </div>
  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

  //  import S from './SongPlayer'
  import dummy from './../dummy'

  export default {
    props: [],

    components: {},

    data(){
      return {
        s: {}
      }
    },

    computed: {
      path: function () {
        return './static/photos/album_'
      }
    },

    methods: {
      paddingBottom: function (a) {
        return a * 100 + '%'
      }
    },


    ready: function () {
      this.s = dummy.story
    }

  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" scoped>

  @import "../styles/constants";

  .simple-story {

    $width-ctn: 560px;
    /*<!--$width-ctn: 700px;-->*/
    /*<!--$width-ctn: 560px;-->*/
    $margin-ctn: 10px;
    $margin-span: 10px;
    $padding-story: 15px;

    /*width: 100%;*/
    width: $width-ctn;

    padding: $padding-story;

    margin-bottom: $comp-margin-bottom;
    background-color: #2c3e50;

    .title {
      font-size: 32px;
      font-weight: 500;

    }

    .story-ctn {

      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      max-height: 1000px;

      .content-ctn {
        display: flex;
        text-align: justify;
        width: $width-ctn / 2;

        video{
         margin: $margin-span;
          width: $width-ctn / 2 - (2 * $margin-span) ;
          object-fit: inherit;
          background-color: transparent;

          // width: $width-ctn / 2;

        }

        .head {
          font-size: 24px;
          font-weight: 500;
        }

        .text {
          font-size: 18px;

        }

        .image-wrapper {
          width: 100%;

          margin-left: $margin-span;
          margin-right: $margin-span;

          justify-content: center;
          align-items: center;

          .thumbnail {
            position: relative;

            width: 100%;
            padding-bottom: 25%;
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

    span {
      margin: $margin-span;
    }

  }
</style>
