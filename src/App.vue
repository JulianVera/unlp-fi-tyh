<script setup>
import { RouterView } from 'vue-router';
import navComponent from './components/navComponent.vue';
</script>

<template>
  <aside>
    <div class="railnav w-20 bg-emerald-100 items-center">
      <div class="flex flex-col">
        <span
          class="flex-col gap-2 flex w-20 h-32 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><menu-icon :size="32" />
          <span class="text-xs">Agenda</span>
        </span>
        <span
          class="flex-col gap-2 flex w-20 h-32 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><menu-icon :size="32" /><span class="text-xs">Profesores</span></span
        >
        <span
          class="flex-col gap-2 flex w-20 h-32 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><menu-icon :size="32" /><span class="text-xs">Clientes</span></span
        >
        <span
          class="flex-col gap-2 flex w-20 h-32 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><menu-icon :size="32" /><span class="text-xs">Canchas</span></span
        >
      </div>
    </div>
  </aside>
  <main>
    <navComponent></navComponent>
    <div class="mainContent">
      <RouterView />
      <!-- <menu-icon /> -->
    </div>
  </main>
</template>

<style>
#app {
  display: flex;
}
.mainContent {
  display: flex;
  width: 100%;
}
</style>
<style>
.railnav {
  display: flex;
  width: 5rem;
  height: 100vh;
  position: fixed;
}
</style>
