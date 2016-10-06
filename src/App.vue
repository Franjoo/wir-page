<template>
    <div id="app">

        <div class="header">
            header
        </div>

        <navigation></navigation>

        <div class="component-ctn">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>

    import Navigation from './components/Navigation.vue';

    export default {


        components: {
            Navigation
        },


        data: function () {
            return {
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
            }
        },

        mounted: function () {
            console.log('app mounted', this)
//            window.addEventListener('scroll', this.onScroll)
        }

    };
</script>

<style lang="scss">


    html {
        height: 100%;
    }

    body {
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        /* The image used */
        /* Set a specific height */
        /*min-height: 500px;*/

        /*!* Create the parallax scrolling effect *!*/
        /*background: #131f2a url("assets/birke.jpg") no-repeat fixed center;*/
        /*background-size: cover;*/

    }

    #app {

        display: flex;
        flex-direction: column;
        width: 100%;
        background: darkslategrey;
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

</style>
