<!------------------- H T M L ------------------->

<template>
  <div class="mini-text blog">

    <div class="text">


      <div class="image-wrapper">

        <div class="thumbnail">
          <!--<div class="thumbnail" :style="{'padding-bottom': paddingBottom(c.ar)}">-->

          <!--<img :src="path + c.img" alt="Image"/>-->
          <!--<img :src="" alt="Image"/>-->
          <img src='./../assets/eric.jpg' alt="Image"/>
          <!--<img src="'./../assets/eric.jpg'" alt="Image"/>-->
          <!--<img src="'./../assets/eric.jpg'" alt="Image"/>-->
          <!--<img :src="'./static/img/' + i.path" alt="Image"/>-->
        </div>

      </div>

      <div class="t">{{d.text}}</div>



    </div>


  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

  import dummy from './../dummy'

  export default {
    props: [],

    components: {},

    data(){
      return {
        d: dummy.mini
      };
    }
  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" scoped>

  .mini-text {

    $margin-span: 0px;

    color: white;
    font-size: 22px;
    /*background-color: lightsalmon;*/

    letter-spacing: 1px;
    font-weight: 100;

    position: relative;

    .text {

      position: relative;

      .t {

        padding: 3em;

        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*width: 100%;*/

        text-align: center;

        background-color: rgba(.1,.1,.1,.5);
      }

      .image-wrapper {

        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        z-index: -1;

        width: 100%;

        margin-left: $margin-span;
        margin-right: $margin-span;

        justify-content: center;
        align-items: center;

        .thumbnail {
          position: absolute;
          width: 100%;
          top: 0;
          bottom: 0;
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
</style>
