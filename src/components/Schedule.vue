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
          <p>{{ court.type }}</p>
        </div>
      </div>
    </div>

    <div class="schedule-grid__content">
      <!-- Columna de horarios -->
      <div class="schedule-grid__times">
        <div
          v-for="(slot, index) in timeSlots"
          :key="index"
          class="schedule-grid__time"
        >
          {{ formatHour(slot) }}
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
            v-for="(slot, slotIndex) in timeSlots"
            :key="slotIndex"
            class="schedule-grid__cell"
            :class="{ 'schedule-grid__cell--hour': slot.endsWith(':00') }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconCancha from './icons/iconCancha.vue';
import IconMenu from './icons/IconMenu.vue';

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
    };
  },
  mounted() {
    this.timeSlots = this.generateTimeSlots();
  },
  methods: {
    generateTimeSlots() {
      let slots = [];
      for (let hour = 7; hour <= 23; hour++) {
        slots.push(`${hour.toString().padStart(2, '0')}:00`);
      }
      return slots;
    },
    formatHour(time) {
      let [hour] = time.split(":");
      let hourInt = parseInt(hour, 10);
      let period = hourInt >= 12 ? "PM" : "AM";
      let formattedHour = hourInt % 12 || 12;
      return `${formattedHour} ${period}`;
    }
  }
};
</script>

<style scoped lang="scss">
$grid-color: #dadce0;

.schedule-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  &__header {
    background: #f3f2f1;
    display: flex;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 10;
    border-bottom: 2px solid $grid-color;
  }

  &__menu {
    width: 3.5rem;
  }

  &__court {
    display: flex;
    height: 72px;
    text-align: left;
    gap: 1rem;
    padding: 0 1rem;
    min-width: 240px;
    align-items: center;
  }

  &__court-info {
    width: 100%;
    p {
      font-size: 0.8rem;
    }
  }

  &__content {
    display: flex;
  }

  &__times {
    width: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 0.5rem;
    text-align: right;
  }

  &__time {
    font-size: 1rem;
    color: #ccc;
    border-bottom: 1px solid #444;
    height: 4rem;
    line-height: 4rem;
  }

  &__columns {
    display: flex;
    flex-grow: 1;
  }

  &__column {
    min-width: 240px;
    display: flex;
    flex-direction: column;
  }

  &__cell {
    height: 4rem;
    border-bottom: 1px solid #ccc;

    &--hour {
      border-bottom: 2px solid #ccc;
      height: 4rem;
    }

    &:hover {
      background-color: rgba(0, 123, 255, 0.1);
    }
  }
}
</style>
