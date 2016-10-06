<!------------------- H T M L ------------------->

<template>

  <div class="navigation">

    <div class="navigation-ctn">
      <div class="item-ctn"><span>Bkas</span></div>
      <div class="item-ctn"><span>Mjsjh sjks</span></div>
      <div class="item-ctn"><span>Onjkcs</span></div>
      <div class="item-ctn"><span>Bkas</span></div>

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
      return {};
    }
  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="sass" scoped>

  .navigation
    margin-bottom: 20px
    height: 200px

    font-size: 20px
    color: white
    background-color: #2c3e50

    display: flex
    flex-direction: row
    justify-content: center
    align-items: center

    .navigation-ctn
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center

      .item-ctn
        /*margin-left: 15px*/
        /*margin-right: 15px*/

        border: dashed
        background-color: #8fdce5

      span
        margin-left: 15px
        margin-right: 15px

  /*margin: 5px*/


</style>
