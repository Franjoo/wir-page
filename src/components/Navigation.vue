<!------------------- H T M L ------------------->

<template>

  <div ref=nav class="navigation">

    <span ref=heightBlocker class="height-blocker"></span>

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

        if (st <= 200) {

          this.$refs.navWrapper.classList.remove('fixed');
          this.$refs.heightBlocker.classList.remove('fixed');

//          this.$refs.nav.style.top = (180 - st) + 'px';

//          for (var i = 0; i <this.$refs.itemCtn.children.length; i++) {
//            var k = this.$refs.itemCtn.children[i].children[0];
//            k.classList.remove('fixed')
//          }

        }

        else {
//          this.$refs.nav.style.top = 0;

          this.$refs.navWrapper.classList.add('fixed');
          this.$refs.heightBlocker.classList.add('fixed');


//          for (var i = 0; i <this.$refs.itemCtn.children.length; i++) {
//            var k = this.$refs.itemCtn.children[i].children[0];
//            k.classList.add('fixed')
//          }


//          for (var i = 0; i < this.navItems.length; i++) {
//            var i = this.navItems[i];
//            i.classList.add('blaaaa');
//
//
//          }


        }

//        console.log(this.scrollPosition.scrollTop)

      }
    },

    mounted: function () {
      window.addEventListener('scroll', this.onScroll)


      this.navItems = this.$refs.nav.querySelectorAll('.item-ctn')

      console.log('navItems', this.navItems, this.$refs.itemCtn.children)


    }
  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" scoped>

  @import "./../styles/all";

  .navigation {

    z-index: 2;
    /*top: 180px;*/

    /*position: fixed;*/
    /*top: 200px;*/

    /*margin-bottom: 20px;*/
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
        height:50px;

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

  /*margin: 5px*/


</style>
