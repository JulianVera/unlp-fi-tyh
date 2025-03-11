<script setup></script>

<template>
  <div class="flex pt-16 w-dvw justify-center h-dvh">
    <div class="flex flex-col w-full items-center gap-8">
      <div class="items-center justify-center flex">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="132"
          height="132"
        />
      </div>
      <h1 class="text-4xl">UniversiTurno</h1>
      <div class="flex flex-col w-full">
        <form class="w-full flex max-w-md m-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >Buscar</label
          >
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-lime-500 focus:border-lime-500"
              placeholder="Buscar profesor, alumno, artículo..."
              required
            />
            <button
              type="submit"
              class="text-green-700 absolute end-2.5 bottom-2.5 bg-lime-400 hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-full text-sm px-4 py-2"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex w-full justify-center">
      <div
        class="w-full max-w-md p-4 bg-emerald-50 border border-gray-200 rounded-lg shadow-sm sm:p-8"
      >
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900">
            Próximos Eventos
          </h5>
          <a href="#" class="text-sm font-medium text-lime-600 hover:underline">
            View all
          </a>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200">
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Clases - Tennis 1
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Cancha 10 - Paddle Grande
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900"
                >
                  10:30 hs
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Clases - Tennis 1
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Cancha 10 - Paddle Grande
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900"
                >
                  10:30 hs
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Clases - Tennis 1
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Cancha 10 - Paddle Grande
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900"
                >
                  10:30 hs
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    Clases - Tennis 1
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Cancha 10 - Paddle Grande
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900"
                >
                  10:30 hs
                </div>
              </div>
            </li>
          </ul>
          <button
            type="submit"
            class="text-green-800 bg-lime-400 hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-full text-md px-4 py-2 w-full mt-12"
          >
            Ver Agenda de Hoy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
