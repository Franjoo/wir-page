<!------------------- H T M L ------------------->

<template>
  <div class="countdown">

    <div class="time-ctn">

      <!-- DAYS-->
      <div class="time days-ctn">
        <span>{{time.days}}</span>
        <span class='t'>Tage</span>
      </div>

      <div class="mark"><span>:</span></div>


      <!-- HOURS-->
      <div class="time hours-ctn">
        <span>{{time.hours}}</span>
        <span class='t'>Stunden</span>
      </div>

      <div class="mark"><span>:</span></div>

      <!-- MINUTES-->
      <div class="time minutes-ctn">
        <span>{{time.minutes}}</span>
        <span class='t'>Minuten</span>
      </div>

      <div class="mark"><span>:</span></div>


      <!-- SECONDS-->
      <div class="time seconds-ctn">
        <span>{{time.seconds}}</span>
        <span class='t'>Sekunden</span>
      </div>


    </div>

    <div class="event-ctn">
      {{d.event}}
    </div>

  </div>
</template>


<!----------------- S C R I P T ----------------->

<script>

  //  import S from './SongPlayer'
  import dummy from './../dummy'

  export default {
    props: ['deadline'],

    components: {},

    data(){
      return {
        d: dummy.countdown,
        time: {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        }
      };
    },

    methods: {


      startTimer: function () {

        var self = this

        var calcTime = function () {

          var t = Date.parse(self.d.date) - Date.parse(new Date());

          let days = Math.floor(t / (1000 * 60 * 60 * 24));
          let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
          let minutes = Math.floor((t / 1000 / 60) % 60);
          let seconds = Math.floor((t / 1000) % 60);

          self.time.days = (days < 10 ? '0' : '') + days
          self.time.hours = (hours < 10 ? '0' : '') + hours
          self.time.minutes = (minutes < 10 ? '0' : '') + minutes
          self.time.seconds = (seconds < 10 ? '0' : '') + seconds

        }


        var timeinterval = setInterval(function () {
          calcTime()
        }, 1000)

      },


    },

    mounted: function () {
      this.startTimer()
    }

  }

</script>


<!------------------ S T Y L E ------------------>

<style lang="scss" scoped>

  @import '../styles/all';

  .countdown {
    background-color: #2c3e50;
    width: 100%;
    height: 100px;

    align-items: center;
    display: flex;

    .time-ctn {

      text-align: center;

      margin: 20px;

      display: flex;
      flex-direction: row;
      align-content: space-between;

      .time {
        display: flex;
        flex-direction: column;
      }

      .mark {
        font-size: 20px;
        margin-left: 10px;
        margin-right: 10px;

        display: flex;
        align-items: center;

      }

      .time {
        font-size: 32px;
      }

      .t {
        font-size: 16px;
      }

    }

    .event-ctn {
      font-size: 26px;
      margin-left: 50px;
    }

  }
</style>
