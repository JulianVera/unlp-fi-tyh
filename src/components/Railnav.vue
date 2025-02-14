<template>
  <div class="railnav w-20 bg-emerald-100 items-start flex flex-col">
    <RouterLink to="/">
      <div class="w-20 h-16 items-center justify-center flex">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="32"
          height="32"
        />
      </div>
    </RouterLink>
    <div class="flex flex-col">
      <RouterLink to="/schedule">
        <span
          class="flex-col gap-2 flex w-20 h-[72px] hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><book-clock-icon :fillColor="'#065f46'" :size="24" />
          <span class="text-xs text-emerald-800">Agenda</span>
        </span>
      </RouterLink>
      <RouterLink to="/people">
        <span
          class="flex-col gap-2 flex w-20 h-20 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><account-group-outline-icon :fillColor="'#065f46'" :size="24" /><span
            class="text-xs text-emerald-800"
            >Personas</span
          ></span
        >
      </RouterLink>
      <RouterLink to="/fields">
        <span
          class="flex-col gap-2 flex w-20 h-20 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><soccer-field-icon :fillColor="'#065f46'" :size="24" /><span
            class="text-xs text-emerald-800"
            >Canchas</span
          ></span
        >
      </RouterLink>
      <RouterLink to="/settings">
        <span
          class="flex-col gap-2 flex w-20 h-20 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><menu-icon :size="24" :fillColor="'#065f46'" /><span
            class="text-xs text-emerald-800"
            >Inventario</span
          ></span
        >
      </RouterLink>
    </div>
  </div>
</template>
<style>
.railnav {
  display: flex;
  top: 0;
  width: 5rem;
  height: 100vh;
  position: fixed;
  z-index: 100;
  /* position: relative; */
}
</style>
