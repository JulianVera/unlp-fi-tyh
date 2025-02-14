<template>
  <div class="railnav w-20 bg-emerald-100 items-start flex flex-col">
    <div class="w-20 h-16 items-center justify-center flex">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="32"
        height="32"
      />
    </div>
    <div class="flex flex-col">
      <RouterLink to="/schedule">
        <span
          class="flex-col gap-2 flex w-20 h-20 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><book-clock-icon :size="24" />
          <span class="text-xs">Agenda</span>
        </span>
      </RouterLink>
      <RouterLink to="/people">
        <span
          class="flex-col gap-2 flex w-20 h-20 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><account-group-outline-icon :size="24" /><span class="text-xs"
            >Personas</span
          ></span
        >
      </RouterLink>
      <RouterLink to="/fields">
        <span
          class="flex-col gap-2 flex w-20 h-20 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><soccer-field-icon :size="32" /><span class="text-xs"
            >Canchas</span
          ></span
        >
      </RouterLink>
      <RouterLink to="/settings">
        <span
          class="flex-col gap-2 flex w-20 h-20 hover:bg-emerald-200 active:bg-emerald-300 items-center justify-center"
          ><menu-icon :size="32" /><span class="text-xs">Setup</span></span
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
