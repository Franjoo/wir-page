<!------------------- H T M L ------------------->

<template>

  <div ref=nav class="navigation">

    <span ref=heightBlocker></span>

    <div ref=navWrapper class="nav-wrapper">
      <div ref=itemCtn class="navigation-ctn">
        <div class="item-ctn"><span><router-link to="/dev/home">Blog</router-link></span></div>
        <div class="item-ctn"><span><router-link to="/dev/music">Artists</router-link></span></div>
        <div class="item-ctn"><span><router-link to="/dev/about">Über Uns</router-link></span></div>
      </div>
    </div>

  </div>

</template>


<!----------------- S C R I P T ----------------->

<script>

  //  import S from './SongPlayer'
  import dummy from './../dummy'

  export default {
    props: ['marginForHeader'],

    components: {},

    data(){
      return {
//        marginForHeader:0,
        fixedItems: [],
        scrollPosition: {
          scrollTop: 0,
          scrollLeft: 0,
        }
      };
    },
    methods: {

      onScroll: function () {
        let st = this.scrollPosition.scrollTop = window.scrollY;
        let sl = this.scrollPosition.scrollLeft = window.scrollX;

        if (st <= this.marginForHeader) this.toggleFixOnItems(false) // todo: get header offset
        else this.toggleFixOnItems(true)

      },

      toggleFixOnItems: function (fix) {
        if (fix) {
          for (var i = 0; i < this.fixedItems.length; i++) {
            this.fixedItems[i].classList.add('fixed')
          }
        } else {
          for (var i = 0; i < this.fixedItems.length; i++) {
            this.fixedItems[i].classList.remove('fixed')
          }
        }
      },
    },

    mounted: function () {
      window.addEventListener('scroll', this.onScroll)

      // push items to be fixed
      this.fixedItems.push(this.$refs.navWrapper, this.$refs.heightBlocker)
      for (var i = 0; i < this.$refs.nav.querySelectorAll('.item-ctn').length; i++) {
        this.fixedItems.push(this.$refs.nav.querySelectorAll('.item-ctn')[i].children[0]) // todo: optimize
      }

    }
  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" scoped>

  @import "./../styles/all";

  .navigation {

    z-index: 2;
    width: 100%;
    overflow: hidden;
    padding-bottom: 20px;
    padding-top: 20px;
    margin-top: -20px; // fixme: dangerous

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      &.fixed {
        height: 50px;
      }
    }

    .nav-wrapper {
      font-size: 20px;
      color: $color-font-primary;
      background-color: $color-primary;
      width: 100%;

      box-shadow: 0 0 13px 5px #191919, 0 0 13px -5px #191919;

      &.fixed {
        position: fixed;
        top: 0;
      }

      .navigation-ctn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 50px;

        /**box-shadow: 0 14px 25px -8px #191919, 0 -14px 25px -8px #191919;*/

       /** box-shadow: 0 25px 25px #191919; */


        .item-ctn {

          span {
            margin-left: 15px;
            margin-right: 15px;

            transition: margin 0.3s ease-out;

            &.fixed {
              margin-left: 30px;
              margin-right: 30px;
            }

          }
        }
      }
    }
  }

</style>
