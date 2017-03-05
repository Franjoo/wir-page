<!------------------- H T M L ------------------->

<template>
  <div class="image-grid">
    <div class="flex-grid">
      <div class="grid-item" v-for="(i, index) in a" v-if='shouldShow(index, a.length)'>
        <div class="grid-image">
          <div class="thumbnail">
            <img :src="rootPath + i.path" alt="Image"/>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

  //  import S from './SongPlayer'
  import dummy from './../dummy'

  export default {
    props: ['album'],

    components: {},

    data(){
      return {
        current: 0,
//        a: dummy.albums,
        a:dummy.albums['grid-letzte-wiese']
      };

    },

    computed: {
      rootPath: function () {
        return './static/photos/'
      }
    },

    methods: {
      shouldShow: function (index, size) {
        if (index >= 3) {
          return false
        }
        return true;
      }
    },

    mounted: function () {
//        console.log('dummy a', this.a)
//        console.log('a', dummy.albums['blaa']);
//        console.log('this', this)
    }
  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" rel="stylesheet/scss" scoped>

  .image-grid {
    background-color: lightsalmon;
    width: 100%;

    .flex-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .grid-item {

      flex: 1 0 auto;
      height: auto;
      background-color: red;
      width: 20%;

      &:before {
        content: '';
        float: left;
        padding-top: 100%;
      }

      .grid-image {

        margin: 0.2em;

        justify-content: center;
        align-items: center;

        .thumbnail {
          position: relative;

          width: 100%;
          padding-bottom: 100%;
          overflow: hidden;

          img {
            width: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            /*width: auto;*/

            transform: translate(-50%, -50%) scale(2);
            transition: all 2s ease;
            /*transform: scale(1);*/

            &:hover {
              transform: translate(-50%, -50%) scale(1.8);
            }

          }
        }

      }
    }
  }
</style>
