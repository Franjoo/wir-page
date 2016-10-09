<!------------------- H T M L ------------------->

<template>
  <div class="artist">
    <div class="artist-ctn">

      <!--LEFT-->

      <div class="artist-left">

        <div class="title-bar">{{a.name}}
        </div>
        <!--<div class="subtitle-bar">subtitle-->
        <!--</div>-->

        <div class="artist-music">
          <div class="player-row" v-for="( track, index) in a.tracks">
            <song-player
              :track=track
              :index=index
              :scoped_player.sync='scoped_player'
            ></song-player>

          </div>
        </div>


      </div>

      <!--RIGHT-->
      <div class="artist-right">
        <div class="artist-img-wrapper">
          <div class="thumbnail">
            <img src="./../assets/eric.jpg" alt="Image"/>
          </div>
        </div>
      </div>

    </div>
  </div>


</template>


<!----------------- S C R I P T ----------------->

<script>

  import SongPlayer from './SongPlayer'
  import dummy from './../dummy'
//  require('vue-scroll')

  export default {
    props: ['scoped_player'],

    components: {
      SongPlayer
    },
    data() {
      return {
        a: {}
      };
    },
    mounted: function () {
      this.a = dummy.artists[0]
    }


  };
</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" scoped>

  .artist {
    width: 100%;
    margin-bottom: 50px;
    user-select: none;


    .artist-ctn {

      background-color: #2c3e50;
      display: flex;
      flex-direction: column-reverse;
      padding: 20px;

      .artist-right {

        .artist-img-wrapper {
          /*display: none;*/
          height: 100%;
          /*display: flex;*/
          justify-content: center;
          align-items: center;

          /*background-color: beige;*/

          /*height: 300px;*/
          /*flex-grow: 1;*/

          .thumbnail {
            position: relative;

            width: 100%;
            height: 300px;
            overflow: hidden;
          }
          .thumbnail img {

            position: absolute;
            left: 50%;
            top: 50%;
            height: 100%;
            width: auto;

            transform: translate(-50%, -50%);
            /*transition: height 1s ease;*/

            /*&:hover {*/
            /*height: 140%;*/

            /*transform: scale(1.1)*/
            /*}*/
          }

        }
      }

      .artist-left {
        display: flex;
        flex-direction: column;
        min-width: 500px;
        margin-right: 20px;

        .title-bar {
          font-size: 1.6em;

        }

        .subtitle-bar {
          font-size: 1em;

        }

        .artist-music {
          /*background-color: red;*/
          flex-grow: 1;
          flex-direction: column;
          justify-content: space-around;
          display: flex;

          .player-row{
            /*justify-content: center;*/

            display: flex;

            span{

            }

          }



        }
      }
    }

  }
</style>
