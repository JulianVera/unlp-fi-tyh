<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    
    <nav class="flex w-full justify-between items-center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="32" />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>

</template>

<style>
</style>
