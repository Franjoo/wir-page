<!------------------- H T M L ------------------->

<template>
    <div class="simple-story blog">
        <span class="title">{{s.title}}</span>
        <div ref=story class='story-ctn' :class="[twoRows ? 'two-rows' : '']">
            <div class="content-ctn" v-for="(c, index) in s.content" :class="[twoRows ? 'two-rows' : '']">
                <span class='text' v-if='c.text'>{{c.text}}</span>
                <span class='head' v-if='c.head'>{{c.head}}</span>

                <div v-if='c.img' class="image-wrapper">

                    <div class="thumbnail" :style="{'padding-bottom': paddingBottom(c.ar)}">
                        <img :src="path + c.img" alt="Image"/>
                    </div>

                </div>

                <video v-if='c.video' controls>
                    <source :src="path + c.video" type="video/mp4">
                    <!--<source src="mov_bbb.ogg" type="video/ogg">-->
                    Your browser does not support HTML5 video.
                </video>

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
                style: {},
                s: {}
            }
        },

        computed: {
            path: function () {
                return './static/photos/album_'
            },

            twoRows: function () {
                return true; // todo
            }
        },

        methods: {
            paddingBottom: function (a) {
                return a * 100 + '%'
            }
        },


        mounted: function () {
            this.s = dummy.story


            this.$nextTick(function () {

                let s = this.$refs.story;
                console.log(s.offsetHeight, s.height)
                            s.style.height = s.offsetHeight / 1.5 + "px";

            })


        }

    }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" rel="stylesheet/scss" scoped>

    @import "../styles/constants";

    .simple-story {

      $width-ctn:100%;

        $margin-ctn: 10px;
        $margin-span: 10px;
        $padding-story: 15px;

        .title {
            font-size: 32px;
            font-weight: 500;

        }

        .story-ctn {

            display: flex;
            flex-direction: column;

            /*<!--$width-ctn : 2px;-->*/

            &.two-rows {
                flex-wrap: wrap;
                /*max-height: auto;*/

                $width-ctn: calc(50%);

            }

            .content-ctn {
                display: flex;
                text-align: justify;
                width: $width-ctn;

                &.two-rows {
                    width: $width-ctn / 2;
                }

                video {
                    margin: $margin-span;
                    width: $width-ctn / 2 - (2 * $margin-span);
                    object-fit: inherit;
                    background-color: transparent;

                    /*width: 100%;*/

                    /*<!--width: $width-ctn / 2;-->*/

                }

                .head {
                    font-size: 24px;
                    font-weight: 500;
                }

                .text {
                    font-size: 18px;

                }

                .image-wrapper {
                    width: 100%;

                    margin-left: $margin-span;
                    margin-right: $margin-span;

                    justify-content: center;
                    align-items: center;

                    .thumbnail {
                        position: relative;

                        width: 100%;
                        padding-bottom: 25%;
                        overflow: hidden;
                    }
                    .thumbnail img {

                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: auto;

                        transform: translate(-50%, -50%);

                    }
                }
            }

        }

        span {
            margin: $margin-span;
        }

    }
</style>
