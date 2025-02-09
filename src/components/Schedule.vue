<template>
  <div class="schedule">
    <div class="schedule__header">
      <div class="schedule__menu">
        <button class="FAB">
          <plus-icon :size="32" />
        </button>
      </div>
      <div
        class="schedule__court"
        v-for="(court, index) in courts"
        :key="index"
      >
        <IconCancha />
        <div class="schedule__court-info">
          <span class="font-bold">{{ court.name }}</span>
          <p class="text-xs">{{ court.type }}</p>
        </div>
      </div>
    </div>

    <div class="schedule__content">
      <!-- Columna de horarios -->
      <div class="schedule__times">
        <div
          v-for="(timeSlot, index) in timeSlots"
          :key="index"
          class="schedule__time"
          :class="{
            'schedule__time--hidden': !timeSlot.endsWith(':00'),
            'schedule__time--hover': isHovered,
          }"
        >
          <span>{{ formatHour(timeSlot) }}</span>
        </div>
      </div>

      <!-- Columnas de canchas -->
      <div class="schedule__columns">
        <div
          class="schedule__column"
          v-for="(court, index) in courts"
          :key="index"
        >
          <div
            v-for="(timeSlot, slotIndex) in timeSlots"
            :key="slotIndex"
            class="schedule__cell"
            :class="{
              'schedule__cell--hour': timeSlot.endsWith(':00'),
              'schedule__cell--quarter': !timeSlot.endsWith(':00'),
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
import IconMenu from './icons/iconAdd.vue';

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
        { name: 'Cancha 3', type: 'Cancha de ladrillo' },
        { name: 'Cancha 4', type: 'Cancha de paddle' },
        { name: 'Cancha 5', type: 'Cancha de paddle' },
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

.schedule {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-left: 1px solid #c0dec4;
  overflow-x: auto;
  padding-left: 5rem;
}

.schedule__header {
  background: #eef6ef;
  display: flex;
  // position: fixed;
  width: fit-content;
  // top: 4rem;
  // left: 5rem;
  z-index: 10;
  border-bottom: 2px solid $grid-color;
}

.schedule__menu {
  min-width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  left: 0;
  border-right: 1px solid #ccc;
  background-color: #eef6ef;
}

.schedule__court {
  display: flex;
  height: 72px;
  text-align: left;
  gap: 1rem;
  padding: 0 1rem;
  min-width: 250px;
  align-items: center;
  border-right: 1px solid #c0dec4;
}

.schedule__content {
  display: flex;
}

.schedule__times {
  min-width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 0.5rem;
  text-align: right;
  position: sticky;
  left: 0;
  background: var(--primary);
  border-right: 1px solid #ccc;
}

.schedule__times,
.schedule__column {
  padding: 6rem 0 1rem;
}

.schedule__time {
  font-size: 10px;
  color: #000;
  // border-top: 1px solid #444;
  height: 1rem;
  line-height: 0rem;
  padding-right: 1rem;
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
.schedule__time--hidden {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Mostrar solo las horas enteras */
.schedule__time:not(.schedule__time--hidden) {
  visibility: visible;
  opacity: 1;
}

/* Mostrar minutos al hacer hover en la grilla */
.schedule__cell:hover ~ .schedule__times .schedule__time--hidden {
  visibility: visible;
  opacity: 1;
}

.schedule__columns {
  display: flex;
  flex-grow: 1;
}

.schedule__column {
  min-width: 250px;
  display: flex;
  border-right: 1px solid #969696;
  flex-direction: column;
}

.schedule__cell {
  height: 1rem;
  border-top: 1px dotted #ccc;
  transition: background-color 0.2s ease-in-out;
}

.schedule__cell:hover {
  background-color: rgba(0, 123, 255, 0.05);
  cursor: pointer;
}

.schedule__cell:active {
  background-color: rgba(0, 123, 255, 0.1);
}

/* Horas en punto más resaltadas */
.schedule__cell--hour {
  border-top: 1px solid #ccd3cb;
  height: 1rem;
  font-weight: bold;
}

/* Minutos con borde más sutil */
// .schedule__cell--quarter {
//   border-bottom: 1px dashed #ddd;
//   height: 1rem;
// }
.FAB {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: greenyellow;
  color: green;
  border-radius: 15px;
  padding: 0.75rem;
}
</style>
