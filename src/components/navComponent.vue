<template>
    <nav class="flex w-full justify-between items-center h-16 fixed top-0 z-50">
      <div class="flex items-center">
        <div class="flex items-center">
          <menu-icon :size="32"/>
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />
        </div>
        <div class="flex items-center px-8">
          <button type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-transparent rounded-full border border-gray-200 hover:bg-gray-100 hover:text-dark-700 focus:z-10 focus:ring-4 focus:ring-gray-100  ">Hoy</button>
          <div class="w-full px-3 mb-6 md:mb-0">
            <div class="relative">
              <select class="block appearance-none w-full bg-transparent rounded-full text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Septiembre</option>
                <option>Octubre</option>
                <option>Diciembre</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div class="flex w-full items-center">
            <p class="text-gray-700 py-3 px-4 pr-8 leading-tight text-nowrap">Viernes 27</p>
            <div class="gap-4 flex items-center">
              <chevron-left-icon :size="20"/>
              
              <button type="button" class="text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  ">
                <chevron-right-icon :size="20"/>
                <span class="sr-only">Icon description</span>
              </button>

            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4 px-4">
        <!-- <RouterLink class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 " to="/">Home</RouterLink> -->
        <!-- <RouterLink class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 " to="/about">About</RouterLink> -->
        <!-- <menu-icon :size="32"/> -->
        <account-circle-icon :size="32"/>

      </div>
      <!-- <div class="hidden w-full md:block md:w-auto" id="navbar-default"> -->
    <!-- </div> -->
    </nav>
</template>

<script>
// Vue.component('menu-icon', MenuIcon);
</script>

<style scoped>
.menu-icon{
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav{
  background-color: var(--primary);
}
</style>
