<template>
  <div class="schedule-grid">
    <div class="schedule-grid__header">
      <div class="schedule-grid__menu">
        <IconMenu />
      </div>
      <div
        class="schedule-grid__court"
        v-for="(court, index) in courts"
        :key="index"
      >
        <IconCancha />
        <div class="schedule-grid__court-info">
          <span>{{ court.name }}</span>
          <p class="text-xs">{{ court.type }}</p>
        </div>
      </div>
    </div>

    <div class="schedule-grid__content">
      <!-- Columna de horarios -->
      <div class="schedule-grid__times">
        <div
          v-for="(timeSlot, index) in timeSlots"
          :key="index"
          class="schedule-grid__time"
          :class="{
            'schedule-grid__time--hidden': !timeSlot.endsWith(':00'),
            'schedule-grid__time--hover': isHovered,
          }"
        >
          <span>{{ formatHour(timeSlot) }}</span>
        </div>
      </div>

      <!-- Columnas de canchas -->
      <div class="schedule-grid__columns">
        <div
          class="schedule-grid__column"
          v-for="(court, index) in courts"
          :key="index"
        >
          <div
            v-for="(timeSlot, slotIndex) in timeSlots"
            :key="slotIndex"
            class="schedule-grid__cell"
            :class="{
              'schedule-grid__cell--hour': timeSlot.endsWith(':00'),
              'schedule-grid__cell--quarter': !timeSlot.endsWith(':00'),
            }"
            @mouseover="showMinutes(slotIndex)"
            @mouseleave="hideMinutes()"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconCancha from './icons/iconCancha.vue';
import IconMenu from './icons/iconMenu.vue';

export default {
  components: {
    IconCancha,
    IconMenu,
  },
  data() {
    return {
      courts: [
        { name: 'Cancha 1', type: 'Cancha de pasto' },
        { name: 'Cancha 2', type: 'Cancha de pasto' },
        { name: 'Cancha 1', type: 'Cancha de ladrillo' },
      ],
      timeSlots: [],
      hoveredTimeSlot: null,
    };
  },

  mounted() {
    this.timeSlots = this.generateTimeSlots();
  },

  methods: {
    generateTimeSlots() {
      let slots = [];
      for (let hour = 7; hour <= 23; hour++) {
        for (let minutes of ['00', '15', '30', '45']) {
          slots.push(`${hour.toString().padStart(2, '0')}:${minutes}`);
        }
      }
      return slots;
    },

    formatHour(time) {
      let [hour, minute] = time.split(':');
      let hourInt = parseInt(hour, 10);
      let period = hourInt >= 12 ? 'PM' : 'AM';
      let formattedHour = hourInt % 12 || 12;
      return `${formattedHour}:${minute} ${period}`;
    },

    showMinutes(slotIndex) {
      this.hoveredTimeSlot = slotIndex;
    },

    hideMinutes() {
      this.hoveredTimeSlot = null;
    },
  },
};
</script>

<style scoped lang="scss">
$grid-color: #dadce0;

.schedule-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.schedule-grid__header {
  background: #eef6ef;
  display: flex;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid $grid-color;
}

.schedule-grid__menu {
  width: 4rem;
}

.schedule-grid__court {
  display: flex;
  height: 72px;
  text-align: left;
  gap: 1rem;
  padding: 0 1rem;
  min-width: 250px;
  align-items: center;
  border-left: 1px solid #c0dec4;
}

.schedule-grid__content {
  display: flex;
}

.schedule-grid__times {
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 0.5rem;
  text-align: right;
}

.schedule-grid__time {
  font-size: 10px;
  color: #000;
  // border-top: 1px solid #444;
  height: 1rem;
  line-height: 0rem;
  display: flex;
  span {
    width: 100%;
  }
  // &:after {
  //   content: '';
  //   width: 0.75rem;
  //   height: 1px;
  //   background-color: black;
  //   display: flex;
  // }
}

/* Ocultar los minutos por defecto */
.schedule-grid__time--hidden {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Mostrar solo las horas enteras */
.schedule-grid__time:not(.schedule-grid__time--hidden) {
  visibility: visible;
  opacity: 1;
}

/* Mostrar minutos al hacer hover en la grilla */
.schedule-grid__cell:hover
  ~ .schedule-grid__times
  .schedule-grid__time--hidden {
  visibility: visible;
  opacity: 1;
}

.schedule-grid__columns {
  display: flex;
  flex-grow: 1;
}

.schedule-grid__column {
  min-width: 250px;
  display: flex;
  border-left: 1px solid #969696;
  flex-direction: column;
}

.schedule-grid__cell {
  height: 1rem;
  border-top: 1px dotted #ccc;
  transition: background-color 0.2s ease-in-out;
}

.schedule-grid__cell:hover {
  background-color: rgba(0, 123, 255, 0.05);
  cursor: pointer;
}

.schedule-grid__cell:active {
  background-color: rgba(0, 123, 255, 0.1);
}

/* Horas en punto más resaltadas */
.schedule-grid__cell--hour {
  border-top: 1px solid #ccd3cb;
  height: 1rem;
  font-weight: bold;
}

/* Minutos con borde más sutil */
// .schedule-grid__cell--quarter {
//   border-bottom: 1px dashed #ddd;
//   height: 1rem;
// }
</style>
