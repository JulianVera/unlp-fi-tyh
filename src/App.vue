<script setup>
import { RouterView } from 'vue-router';
import navComponent from './components/navComponent.vue';
</script>

<template>
  <aside>
    <div class="railnav">
      <div>
        <span>Agenda</span>
        <span>Canchas</span>
        <span>Profesores</span>
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

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
