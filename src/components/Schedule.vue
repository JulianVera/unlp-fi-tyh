<template>
  <!-- basado en la idea de https://codepen.io/kjellmf/pen/qgxyVJ -->
  <div class="containerGrid relative h-dvh overflow-auto w-full">
    <div class="days h-12">
      <div class="filler"></div>
      <div class="filler"></div>
      <div class="day">
        <IconCancha />
      </div>
      <div class="day">Tue 5</div>
      <div class="day">Wed 6</div>
      <div class="day">Thu 7</div>
      <div class="day current">Fri 8</div>
      <div class="day">Sat 9</div>
      <div class="day">Sun 10</div>
    </div>
    <div class="content">
      <div 
        v-for="(val, index) in timeSlots" 
        :key="index" 
        :style="{ gridRow: index + 1 }" 
        class="time">
        {{ val }}:00
      </div>
      <div class="filler-col"></div>

      <!-- Columns -->
      <div 
        v-for="n in 5" 
        :key="'col-' + n" 
        :style="{ gridColumn: n + 2 }" 
        class="col">
      </div>
      <div class="col weekend" :style="{ gridColumn: 8 }"></div>
      <div class="col weekend" :style="{ gridColumn: 9 }"></div>
      <account-circle-icon :size="32"/>

      <!-- Rows -->
      <div 
        v-for="n in 23" 
        :key="'row-' + n" 
        :style="{ gridRow: n }" 
        class="row">
      </div>

      <!-- Events -->
      <div class="event event1 calendar1">Event 1</div>
      <div class="event event2 calendar2">Event 2</div>
      <div class="event event3 calendar2">Event 3</div>
      <div class="event event4 calendar1">Event 4</div>

      <div class="current-time">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import IconCancha from './icons/iconCancha.vue';

export default {
  components: {
    IconCancha,
  },
  data() {
    return {
      timeSlots: [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23'
      ]
    };
  }
};
</script>

<style scoped lang="scss">
$title-height: 3em;
$days-height: 3em;
$time-width: 3em;
$time-height: 3em;
$grid-color: #dadce0;
$calendar-template: $time-width 10px repeat(7, 1fr);
$current-time-color: #ea4335;

* {
  box-sizing: border-box;
}

body {
  background: #fff;
}

.containerGrid {
  width: 100%;
  display: grid;
  grid-template-rows: $title-height $days-height auto;
  // position: absolute;
}

.days {
  background: #f3f2f1;
  display: grid;
  place-content: center;
  text-align: center;
  grid-template-columns: $calendar-template;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid $grid-color;
}

.day {
  border-left: 1px solid $grid-color;
  height: 48px;
}

.content {
  display: grid;
  grid-template-columns: $calendar-template;
  grid-template-rows: repeat(24, $time-height);
}

.time {
  grid-column: 1;
  text-align: right;
  align-self: end;
  font-size: 80%;
  position: relative;
  bottom: -1ex;
  color: #70757a;
  padding-right: 2px;
}

.col {
  border-right: 1px solid $grid-color;
  grid-row: 1 / span 24;
  grid-column: span 1;
}

.filler-col {
  grid-row: 1 / -1;
  grid-column: 2;
  border-right: 1px solid $grid-color;
}

.row {
  grid-column: 2 / -1;
  border-bottom: 1px solid $grid-color;
}

.event {
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 80%;
}

.weekend {
  background-color: #f1f3f4;
  // display: none;
}

.calendar1 {
  background-color: #d7dbef;
  border-color: #bcc3e5;
}

.calendar2 {
  background-color: #b3e1f7;
  border-color: #81cdf2;
}

.event1 {
  grid-column: 3;
  grid-row: 9 / span 4;
}

.event2 {
  grid-column: 5;
  grid-row: 10 / span 6;
}

.event3 {
  grid-column: 7;
  grid-row: 8 / span 10;
}

.event4 {
  grid-column: 8;
  grid-row: 21 / span 2;
}

.current-time {
  grid-column: 7;
  grid-row: 10;
  border-top: 2px solid $current-time-color;
  position: relative;
  top: calc(50% - 1px);
}

.circle {
  width: 12px;
  height: 12px;
  border: 1px solid $current-time-color;
  border-radius: 50%;
  background: $current-time-color;
  position: relative;
  top: -6px;
  left: -6px;
}

.current {
  font-weight: bold;
}

</style>