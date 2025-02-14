<template>
  <div
    class="fixed top-40 h-auto w-1/3 bg-white shadow-lg p-6 transition-transform duration-300"
    :class="modalXPosition"
  >
    <h2 class="text-xl font-bold mb-4">Crear Nueva Reserva</h2>

    <form @submit.prevent="submitEvent">
      <div class="mb-4">
        <label class="block text-sm font-medium">Profesor:</label>
        <input
          v-model="form.profesor"
          type="text"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium">Alumnas:</label>
        <input
          v-model="form.alumnas"
          type="text"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium">Cliente Particular:</label>
        <input
          v-model="form.cliente"
          type="text"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
        />
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
    modalXPosition: String, // Recibe "left-0" o "right-0"
  },
  data() {
    return {
      form: {
        profesor: '',
        alumnas: '',
        cliente: '',
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    submitEvent() {
      this.$emit('save', { ...this.form });
      this.closeModal();
    },
  },
};
</script>
