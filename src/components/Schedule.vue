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
          v-for="(court, courtIndex) in courts"
          :key="courtIndex"
        >
          <div
            v-for="(timeSlot, slotIndex) in timeSlots"
            :key="slotIndex"
            class="schedule__cell"
            :class="{
              'schedule__cell--hour': timeSlot.endsWith(':00'),
              'schedule__cell--quarter': !timeSlot.endsWith(':00'),
              'schedule__cell--selected': isSelected(courtIndex, slotIndex),
              'schedule__cell--hover': isHovered(courtIndex, slotIndex), // Asegurarse de pasar courtIndex
            }"
            @mousedown="startEvent(courtIndex, slotIndex)"
            @mouseover="extendEvent(courtIndex, slotIndex)"
            @mouseup="finalizeEvent()"
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
        { name: 'Cancha 3', type: 'Cancha de ladrillo' },
        { name: 'Cancha 4', type: 'Cancha de paddle' },
        { name: 'Cancha 5', type: 'Cancha de paddle' },
        { name: 'Cancha 6', type: 'Cancha de ladrillo' },
        { name: 'Cancha 7', type: 'Cancha de pasto' },
      ],
      timeSlots: [],
      selectedEvent: null, // Evento en selección
      events: [], // Eventos guardados
      isDragging: false,
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

    startEvent(courtIndex, slotIndex) {
      this.selectedEvent = {
        court: courtIndex,
        start: slotIndex,
        end: slotIndex, // Inicialmente, start y end son iguales
      };
      this.isDragging = true;
    },

    extendEvent(courtIndex, slotIndex) {
      if (
        this.isDragging &&
        this.selectedEvent &&
        this.selectedEvent.court === courtIndex
      ) {
        // Permite extender tanto hacia arriba como hacia abajo
        this.selectedEvent.start = Math.min(
          this.selectedEvent.start,
          slotIndex
        );
        this.selectedEvent.end = Math.max(this.selectedEvent.end, slotIndex);
      }
    },

    finalizeEvent() {
      if (this.selectedEvent) {
        this.events.push({ ...this.selectedEvent });
        this.selectedEvent = null;
      }
      this.isDragging = false;
    },

    isSelected(courtIndex, slotIndex) {
      return this.events.some(
        (event) =>
          event.court === courtIndex && // Asegurar que es la misma cancha
          slotIndex >= event.start &&
          slotIndex <= event.end
      );
    },

    isHovered(courtIndex, slotIndex) {
      return (
        this.isDragging &&
        this.selectedEvent &&
        this.selectedEvent.court === courtIndex && // Asegurar que solo afecta la cancha en la que se selecciona
        slotIndex >= this.selectedEvent.start &&
        slotIndex <= this.selectedEvent.end
      );
    },
  },
};
</script>

<style scoped lang="scss">
$grid-color: #dadce0;
$border-color: #c0dec4;
$primary-bg: #eef6ef;

.schedule {
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: auto;
}

.schedule__header {
  background: $primary-bg;
  display: flex;
  position: sticky;
  top: 0;
  width: fit-content;
  padding-left: 5rem;
  z-index: 10;
  border-bottom: 2px solid $grid-color;
}

.schedule__menu {
  min-width: 5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 5rem;
  top: 4rem;
  border-right: 1px solid #ccc;
  background-color: $primary-bg;
  z-index: 100;
}

.schedule__court {
  display: flex;
  align-items: center;
  height: 72px;
  gap: 1rem;
  padding: 0 1rem;
  min-width: 250px;
  text-align: left;
  border-right: 1px solid $border-color;
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
  padding: 3rem 0 1rem;
}

.schedule__time {
  font-size: 10px;
  color: #000;
  height: 1rem;
  line-height: 0rem;
  padding-right: 1rem;
  display: flex;

  span {
    width: 100%;
  }
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
  flex-direction: column;
  border-right: 1px solid #969696;
}

.schedule__cell {
  height: 1rem;
  border-top: 1px solid #e0e0e0;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.schedule__cell:hover {
  background-color: greenyellow;
}

.schedule__cell:active {
  background-color: greenyellow;
}

/* Horas en punto más resaltadas */
.schedule__cell--hour {
  border-top: 1px solid #ccc;
  height: 1rem;
  font-weight: bold;
}

/* Selección de eventos */
.schedule__cell--selected {
  background-color: rgba(172, 255, 47, 0.3);
  border-radius: 4px;
  border-right: 2px solid green;
  border-left: 2px solid green;
}

.schedule__cell--selected + .schedule__cell--selected {
  // border-radius: 0;
  // border-color: transparent;
  // border-color: blue;
  // border-width: 0 1px;
  border-radius: 0;
  // border-color: transparent;
  border-width: 0 2px;
}

/* 🎯 Borde superior solo para la primera celda del grupo seleccionado */
.schedule__cell:not(.schedule__cell--selected) + .schedule__cell--selected {
  border-top: 2px solid green;
  border-radius: 4px 4px 0 0;
}

/* 🎯 Borde inferior solo para la última celda del grupo seleccionado */
.schedule__cell--selected:has(
    + .schedule__cell:not(.schedule__cell--selected)
  ) {
  border-bottom: 2px solid green;
  border-radius: 0 0 4px 4px;
}
.schedule__column .schedule__cell--selected:first-of-type {
  border-radius: 4px 4px 0 0; /* Redondear solo la parte superior */
  border-top: 2px solid green;
}

.schedule__column .schedule__cell--selected:last-of-type {
  border-radius: 0 0 4px 4px; /* Redondear solo la parte inferior */
  // border-color: red; /* Cambiar color del borde */
  border-bottom: 2px solid green;
}

// .schedule__cell--selected:first-child {
//   border-color: blue;
//   border-width: 1px 1px 1px 1px;
// }

/* Hover de selección */
.schedule__cell--hover {
  background-color: rgba(172, 255, 47, 0.75);
  border-color: transparent;
}
</style>
