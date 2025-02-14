<script setup>
import PeopleTable from '@/components/PeopleTable.vue';
</script>
<template>
  <div class="flex px-4 w-dvw flex-col">
    <div class="flex justify-between items-center">
      <h1 class="w-full text-2xl px-2 py-4">Settings</h1>
      <button class="FAB">
        <plus-icon :size="32" />
      </button>
    </div>
    <div class="rounded-xl">
      <div class="flex pb-8 bg-[#edf6ee] rounded-xl">
        <h1 class="w-full text-xl p-6 border-b-2 border-green-500">
          Profesores
        </h1>
        <h1 class="w-full text-xl p-6 border-b-2">Alumnos</h1>
        <h1 class="w-full text-xl p-6">Clientes</h1>
      </div>
      <div class="flex gap-4">
        <PeopleTable></PeopleTable>
      </div>
    </div>
  </div>
</template>
