<!------------------- H T M L ------------------->

<template>
  <div class="page-music">

    <div class="entry-ctn">
      <iframe scrolling="no" id="hearthis_at_track_484468" width="100%" height="130"
              src="https://hearthis.at/embed/484468/transparent/?hcolor=&color=&style=2&block_size=2&block_space=4&background=0&waveform=0&cover=1&autoplay=0&css="
              frameborder="0" allowtransparency><p>Listen to <a
        href="https://hearthis.at/rauschzeit/085-luce-bree-rauschzeit-mix-show/" target="_blank">#085 Luce Bree -
        Rauschzeit Mix Show</a> <span>by</span><a href="https://hearthis.at/rauschzeit/" target="_blank">Rauschzeit</a>
        <span>on</span> <a href="https://hearthis.at/" target="_blank">hearthis.at</a></p></iframe>
    </div>

    <!--hearthis-->
    <div class="entry-ctn">
      <iframe scrolling="no" id="hearthis_at_track_557594" width="100%" height="150"
              src="https://hearthis.at/embed/557594/transparent_black/?hcolor=&color=&style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css="
              frameborder="0" allowtransparency><p>Listen to <a
        href="https://hearthis.at/wild-in-der-region/luce-bree-josef-ppig-cyclemp3/" target="_blank">Luce Bree &amp;
        Josef Üppig - Cycle</a> <span>by</span><a href="https://hearthis.at/wild-in-der-region/" target="_blank">Wild in
        der Region</a> <span>on</span> <a href="https://hearthis.at/" target="_blank">hearthis.at</a></p></iframe>
    </div>

    <!--soundcloud-->
    <div class="entry-ctn">
      <iframe width="100%" height="300" scrolling="no" frameborder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/305110278&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"></iframe>
    </div>

    <!--soundcloud - playlist-->
    <div class="entry-ctn">
      <iframe width="100%" height="450" scrolling="no" frameborder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2645379&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>
    </div>

  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

//  import S from './SongPlayer'
//  import dummy from './../dummy'

  export default {
    props: [],

    components: {
    },

    data(){
      return {};
    }
  }


</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" rel="stylesheet/scss" scoped>


  .page-music {
    /*color: #ffffff;*/
    /*font-family: Source Sans Pro, Helvetica, sans-serif;*/
    /*font-weight: 300;*/

    /*width: 100%;*/
    /*height: 100%;*/

    /*display: flex;*/
    /*justify-content: center;*/
    /*flex-direction: column;*/

    /*position: relative;*/
  }

  /*.page-music {*/
  /*background-color: lightsalmon;*/
  /*}*/
</style>
