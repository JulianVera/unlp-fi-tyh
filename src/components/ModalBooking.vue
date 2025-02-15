<template>
  <div
    class="fixed top-40 h-auto w-1/3 bg-white shadow-lg p-6 transition-transform duration-300"
    :class="modalXPosition"
  >
    <h2 class="text-xl font-bold mb-4">Crear Nueva Reserva</h2>

    <form @submit.prevent="submitEvent">
      <div class="mb-4">
        <label class="block text-sm font-medium">Profesor:</label>
        <select
          v-model="form.profesor"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
        >
          <option value="">Seleccionar profesor</option>
          <option v-for="prof in professors" :key="prof.id" :value="prof.name">
            {{ prof.name }} ({{ prof.specialty }})
          </option>
        </select>
      </div>

      <div class="flex justify-end space-x-2">
        <button
          type="button"
          @click="closeModal"
          class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Cancelar
        </button>
        <button
          type="submit"
          class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Guardar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    modalXPosition: String,
    professors: Array,
  },
  data() {
    return {
      form: {
        profesor: '', // Inicializar con cadena vacía
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    submitEvent() {
      console.log('🔹 Enviando evento con profesor:', this.form.profesor);
      this.$emit('save', { profesor: this.form.profesor || 'Sin asignar' });
      this.closeModal();
    },
  },
};
</script>
