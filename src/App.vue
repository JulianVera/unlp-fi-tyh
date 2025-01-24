<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navComponent from './components/navComponent.vue'


</script>

<template>
    
    <navComponent></navComponent>
    <main class="">
      <RouterView />
      <!-- <menu-icon /> -->
    </main>

</template>

<style>
main{
  display: flex;
  width: 100%;
}
</style>
