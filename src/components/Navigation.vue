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
    props: [],

    components: {},

    data(){
      return {
        navItems: [],
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

        if (st <= 200) this.unfixHeader() // todo: get header offset
        else this.fixHeader()

      },

      fixHeader: function () {
        this.$refs.navWrapper.classList.add('fixed');
        this.$refs.heightBlocker.classList.add('fixed');

        for (var i = 0; i < this.navItems.length; i++) {
          var item = this.navItems[i];
          item.children[0].classList.add('fixed')
        }
      },

      unfixHeader: function () {
        this.$refs.navWrapper.classList.remove('fixed');
        this.$refs.heightBlocker.classList.remove('fixed');

        for (var i = 0; i < this.navItems.length; i++) {
          var item = this.navItems[i];
          item.children[0].classList.remove('fixed')
        }
      }
    },

    mounted: function () {
      window.addEventListener('scroll', this.onScroll)

      this.navItems = this.$refs.nav.querySelectorAll('.item-ctn')
      console.log(this.navItems)
    }
  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" scoped>

  @import "./../styles/all";

  .navigation {

    z-index: 2;
    width: 100%;

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

        .item-ctn {

          span {
            margin-left: 15px;
            margin-right: 15px;

            transition: all 0.3s ease;

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
