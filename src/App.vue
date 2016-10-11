<template>
  <div id="app">

    <div v-if='comingPageRoute' class="development-ctn">
      coming soon
    </div>

    <div v-if='!comingPageRoute' class="production-ctn">

      <custom-header></custom-header>

      <navigation></navigation>

      <div class="component-ctn">
        <router-view></router-view>
      </div>

      <custom-footer></custom-footer>

    </div>
  </div>
</template>

<script>

  //  import env from './env'
  import Navigation from './components/Navigation';
  import CustomHeader from './components/CustomHeader.vue';
  import CustomFooter from './components/CustomFooter.vue';

  export default {

    components: {
      Navigation, CustomHeader, CustomFooter
    },

    data: function () {
      return {
        dev: true,
        scoped_player: null,
        scrollPosition: {
          scrollTop: 0,
          scrollLeft: 0
        },
      }
    },

    methods: {
      onScroll: function () {
        this.scrollPosition.scrollTop = window.scrollY;
        this.scrollPosition.scrollLeft = window.scrollX;
//                console.log('on scroll',
//                        this.scrollPosition.scrollTop,
//                        this.scrollPosition.scrollLeft)
      }
    },

    computed: {
      translation: function () {
        let factor = 0.2;
        return 'translateY(-' + (factor * this.scrollPosition.scrollTop) + 'px)';
      },

      comingPageRoute: function () {
        return this.$route.fullPath === "/"
      }
    },

    mounted: function () {
      console.log('app mounted', this)
//      this.dev = env.dev
//            window.addEventListener('scroll', this.onScroll)
    }

  };
</script>

<style lang="scss">


  html {
    height: 100%;

    body {
      margin: 0 !important;

      #app {

        .development-ctn {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          overflow: auto;
          background-color: #2b2b2b;
          color: white;
          font-size: 3em;
          font-family: Source Sans Pro, Helvetica, sans-serif;
          font-weight: 100;
          letter-spacing: 3px;

          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          align-items: center;

        }

        .production-ctn {

          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          align-items: center;

          .header {
            width: 100%;
            background: darkgreen;
            height: 200px;
          }

          .component-ctn {
            max-width: 600px;
          }

        }
      }
    }
  }

</style>
