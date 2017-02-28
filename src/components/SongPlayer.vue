<!------------------- H T M L ------------------->

<template>
  <div class="song-player" @click="togglePlay()"
       v-bind:class="[!paused ? style.trackSelected : '']">

    <!--<iframe v-el:download id="frame" style="display:none;"></iframe>-->

    <div class="button-ctn">
      <!--<a href='./static/audio/audiodemo.mp3' > Click Here <a> To Download-->
      <!--<input type="button" value="Download" >-->

      <div class="button" v-bind:class="[paused ? 'paused' : '']">
        <!--<div v-el:button :class="{style.iconPaused : paused, style.iconPlaying : !paused}">-->
        <!--<div v-el:button :class="['mark',{'paused' : paused,'playing' : !paused}]">-->
        <!--<div v-el:button :class="['mark',{{css_button}}]">-->
        <div v-show='!paused' class="mark" v-bind:class="[paused ? style.iconPaused : style.iconPlaying]">

          <!--{{ icon() }}-->
          <!--{{ css_button }}-->

          <audio ref=audio :src="audioPath" preload="true"></audio>
        </div>

      </div>
    </div>

    <div class="song-title-ctn">
      <div v-if='paused' class="track-index"><span>{{index + 1}}</span></div>
      <!--<div v-if='paused' class="track-index">{{index + 1}}</div>-->
      <span class="track-name">{{track.name}}</span>
      <span class="track-duration">{{track.duration}}</span>
      <div download class="track-download" @click="download()">
        <i :class='style.iconDownload'></i>
      </div>
    </div>
  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

  var url = require("file!./../assets/audio/audiodemo.mp3");

  console.log('URL', url)

  export default {

    props: ['scoped_player', 'track', 'index'],

    data() {
      return {
        duration: 0,
        paused: true,
        audioPath: './static/audio/audiodemo.mp3',
        style: {
          trackSelected: 'selected',
          iconPaused: 'paused fa fa-pause',
//          iconPaused: '',
          iconPlaying: 'fa fa-play',
          iconDownload: 'fa fa-chevron-circle-down'
        },
      };
    },
    methods: {

      // scoped player
      pause: function () {
        console.log('scopedPause')
        this.paused = true;
        this.$refs.audio.pause()
      },

      togglePlay: function () {
        this.paused = !this.paused;

        if (!this.scoped_player) {
          this.scoped_player = this;
        }

        if (!(this === this.scoped_player) && !this.paused) {
          this.scoped_player.pause()
          this.scoped_player = this;
        }

        if (!this.paused) {
          this.$refs.audio.play()
        } else {
          this.$refs.audio.pause()
        }

      },

      download: function () {
        window.location = this.audioPath
//        this.$els.download.src = this.audioPath;
      },

      icon: function () {
        return this.paused ? 'II' : '>'
      },

    },

    mounted: function () {
      console.log(this.$refs.audio.src, this.audioPath)
    }

  };
</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" rel="stylesheet/scss" scoped>

  @import './../assets/font-awesome/css/font-awesome.css';

  .song-player {
    display: flex;
    flex-direction: row;
    width: 100%;
    cursor: pointer;

    $span-width: 50px;

    &.selected {
      background-color: #dcdcec;
      color: black;
      box-shadow: 0 3px 6px #191919;
    }

    .button-ctn {
      display: flex;

      .button {
        width: $span-width;
        height: $span-width;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        &.paused {
          width: 0;
        }

        .mark {
          user-select: none;

          &:hover {
          }
        }
      }

    }

    .song-title-ctn {
      user-select: none;

      display: flex;
      font-size: 1.1em;
      letter-spacing: 2px;
      width: 100%;

      align-items: center;

      .track-duration {
      }
      .track-name {
        width: 100%;
      }

      .track-index {

        display: flex;
        align-items: center;
        justify-content: center;

        width: 50px;
        flex: 0 0 50px;
      }

      .track-download {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100%;
        width: 50px;
        flex: 0 0 50px;

        margin-left: 10px;
      }

      span {
        margin-left: 10px;
        margin-right: 10px;
      }

    }
  }
</style>
