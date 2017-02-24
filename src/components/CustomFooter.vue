<!------------------- H T M L ------------------->

<template>
  <div class="custom-footer">
    <div class="footer-links-wrapper">
      <div class="footer-links">

        <p>
          Fragen &amp; Kommentare: <br>
          <a href="mailto:wir-info@gmail.de">
            wir-info@gmail.de </a>
        </p>

        <p>
          Pressekontakt: <br>
          <a href="mailto:wir-presse@gmail.de">
            wir-presse@gmail.de </a>
        </p>

        <p>
          Helfer &amp; Freunde: <br>
          <a href="mailto:wir-helfer@gmail.de">
            wir-helfer@gmail.de </a>
        </p>

      </div>

      <div class="footer-links">

        <p>
          Food &amp; Drinks: <br>
          <a href="mailto:wir-food@gmail.de">
            wir-food@gmail.de </a>
        </p>

        <p>
          Artists &amp; Booking: <br>
          <a href="mailto:wir-booking@gmail.de">
            wir-booking@gmail.de </a>
        </p>

        <p>
          Werde ein(e) FreundIn: <br>
          <a href="https://www.facebook.com/wildinderregion">
            Facebook </a>
        </p>

      </div>

      <div class="footer-links">

        <p>
          Haftungsausschluss: <br>
          <a href="http://google.de">Impressum</a> / <a href="google.de">AGB</a>
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

    components: {},

    data(){
      return {};
    }
  }




</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" scoped>

  .custom-footer {
    position: fixed;
    bottom: 0;
    pointer-events: all;

    color: white;
    background-color: #191919;
    width: 100%;
    height: 280px;

    z-index: -1;

    .footer-links-wrapper {
      position: fixed;
      bottom: 20px;
      right: 0;
      left: 0;
      /*width: 100%;*/
      height: 100%;
      margin-left: 10%;
      margin-right: 10%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      .footer-links {
        display: flex;
        flex-direction: column;
      }

    }

  }

</style>
