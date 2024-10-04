<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
    
    <nav class="nav">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="32" />
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <main>
        <RouterView />
      </main>

</template>

<style scoped lang="sass">
// .body
//   height: 100%
//   width: 100%
//   display: flex
//   flex-direction: column
main
  height: 100%
  display: flex
  width: 100%
nav.nav
  width: 100%
  font-size: 12px
  text-align: center
  margin-top: 2rem

  a.router-link-exact-active
    color: var(--color-text)
    &:hover
      background-color: transparent

  a
    display: inline-block
    padding: 0 1rem
    border-left: 1px solid var(--color-border)
    &:first-of-type
      border: 0

@media (min-width: 1024px)
  header
    display: flex
    place-items: center
    padding-right: calc(var(--section-gap) / 2)

  .logo
    margin: 0 2rem 0 0

  header .wrapper
    display: flex
    place-items: flex-start
    flex-wrap: wrap

  nav
    text-align: left
    margin-left: -1rem
    font-size: 1rem
    padding: 1rem 0
    margin-top: 1rem
</style>
