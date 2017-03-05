<!------------------- H T M L ------------------->

<template>
  <div class="page-about page-layout">
    <div class="entry-ctn">
      <div class="blog">

        <p>Wild in der Region,</p>

        <p>
          das sind neben Hirsch, Wildschwein und Bambi auch WiR.
          Die Jungs und Mädels aus der Uckermark, die der geneigte Großstädter wohl mit einem Zwinkern „Dorfjugend“
          nennen
          würde. Doch unsere Ambitionen sind alles andere als dörflich. Mit der Liebe zur Heimat im Herzen, haben wir
          schon früh die Weiten der Uckermark für uns zu nutzen gewusst. Wenn sich Fuchs und Hase gute Nacht sagen,
          drehen WiR
          dort die Bässe auf. Saftige Wiesen sind unsere Dancefloors, malerische Kulissen unsere Chillout Lounges. Und
          wenn keiner den Weg zu uns findet, sind WiR unsere Partycrowd.
        </p>

        <p>
          Denn die Gemeinschaft kommt noch vor Deko und Musik.
          Zusammen zu träumen und es nicht dabei zu belassen, gemeinsam man selbst zu sein, mit Freunden eine wilde
          Sause feiern, zusammen etwas neues schaffen, um danach gemeinsam in Erinnerungen zu schwelgen.
        </p>

        <p>Das sind WiR. </p>

        <p> Und apropos: Das Reh ist nicht das Kind vom Hirsch. </p>
      </div>
    </div>


    <div class="entry-ctn">
      <div class="blog">

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam
        </p>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

      </div>
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

  @import "../../styles/all";

  .page-about {
    font-size: 18px;

    :first-child.entry-ctn {
      margin-top: 0 !important;
    }


    :last-child.entry-ctn {
      margin-bottom: 40px !important;
    }
  }
</style>
