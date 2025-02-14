<script setup>
import { RouterView } from 'vue-router';
import Railnav from './components/Railnav.vue';
</script>

<template>
  <aside>
    <Railnav></Railnav>
  </aside>
  <main>
    <RouterView />
  </main>
</template>

<style>
#app {
  display: flex;
}
main {
  display: flex;
  width: 100%;
  padding-left: 5rem;
}
</style>
