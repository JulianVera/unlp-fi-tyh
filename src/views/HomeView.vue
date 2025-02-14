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
      <div class="flex flex-col">
        <form class="w-full flex">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >Search</label
          >
          <div class="relative">
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
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>

        <button>Ver agenda de hoy</button>
        <button>Saltar a un día</button>
        <div class="max-w-sm">
          <!-- SearchBox -->
          <div
            class="relative"
            data-hs-combo-box='{
    "groupingType": "default",
    "preventSelection": true,
    "isOpenOnFocus": true,
    "groupingTitleTemplate": "<div class=\"block text-xs text-gray-500 m-3 mb-1"></div>"
  }'
          >
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
              >
                <svg
                  class="shrink-0 size-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <input
                class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                type="text"
                role="combobox"
                aria-expanded="false"
                placeholder="Search or type a command"
                value=""
                data-hs-combo-box-input=""
              />
            </div>

            <!-- SearchBox Dropdown -->
            <div
              class="absolute z-50 w-full bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]"
              style="display: none"
              data-hs-combo-box-output=""
            >
              <div
                class="max-h-[500px] p-2 overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
                data-hs-combo-box-output-items-wrapper=""
              >
                <div
                  data-hs-combo-box-output-item='{"group": {"name": "recent", "title": "Recent"}}'
                  tabindex="0"
                >
                  <a
                    class="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg"
                    href="/"
                  >
                    <svg
                      class="shrink-0 size-4 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path
                        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                      ></path>
                    </svg>
                    <span
                      class="text-sm text-gray-800"
                      data-hs-combo-box-search-text="Compose an email"
                      data-hs-combo-box-value=""
                      >Compose an email</span
                    >
                    <span
                      class="ms-auto text-xs text-gray-400"
                      data-hs-combo-box-search-text="Gmail"
                      data-hs-combo-box-value=""
                      >Gmail</span
                    >
                  </a>
                </div>
                <div
                  data-hs-combo-box-output-item='{"group": {"name": "recent", "title": "Recent"}}'
                  tabindex="1"
                >
                  <a
                    class="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg"
                    href="/"
                  >
                    <svg
                      class="shrink-0 size-4 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"
                      ></path>
                      <path
                        d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
                      ></path>
                    </svg>
                    <span
                      class="text-sm text-gray-800"
                      data-hs-combo-box-search-text="Start a conversation"
                      data-hs-combo-box-value=""
                      >Start a conversation</span
                    >
                    <span
                      class="ms-auto text-xs text-gray-400"
                      data-hs-combo-box-search-text="Slack"
                      data-hs-combo-box-value=""
                      >Slack</span
                    >
                  </a>
                </div>
                <div
                  data-hs-combo-box-output-item='{"group": {"name": "recent", "title": "Recent"}}'
                  tabindex="2"
                >
                  <a
                    class="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg"
                    href="/"
                  >
                    <svg
                      class="shrink-0 size-4 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    <span
                      class="text-sm text-gray-800"
                      data-hs-combo-box-search-text="Create a project"
                      data-hs-combo-box-value=""
                      >Create a project</span
                    >
                    <span
                      class="ms-auto text-xs text-gray-400"
                      data-hs-combo-box-search-text="Notion"
                      data-hs-combo-box-value=""
                      >Notion</span
                    >
                  </a>
                </div>
                <div
                  data-hs-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
                  tabindex="5"
                >
                  <a
                    class="py-2 px-2.5 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                    href="/"
                  >
                    <img
                      class="shrink-0 size-5 rounded-full"
                      src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <span
                      class="text-sm text-gray-800"
                      data-hs-combo-box-search-text="Kim Ya Sung"
                      data-hs-combo-box-value=""
                      >Kim Ya Sung</span
                    >
                    <span
                      class="ms-auto text-xs text-teal-600"
                      data-hs-combo-box-search-text="Online"
                      data-hs-combo-box-value=""
                      >Online</span
                    >
                  </a>
                </div>
                <div
                  data-hs-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
                  tabindex="6"
                >
                  <a
                    class="py-2 px-2.5 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                    href="/"
                  >
                    <img
                      class="shrink-0 size-5 rounded-full"
                      src="https://images.unsplash.com/photo-1610186593977-82a3e3696e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <span
                      class="text-sm text-gray-800"
                      data-hs-combo-box-search-text="Chris Peti"
                      data-hs-combo-box-value=""
                      >Chris Peti</span
                    >
                    <span
                      class="ms-auto text-xs text-gray-400"
                      data-hs-combo-box-search-text="Offline"
                      data-hs-combo-box-value=""
                      >Offline</span
                    >
                  </a>
                </div>
                <div
                  data-hs-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
                  tabindex="7"
                >
                  <a
                    class="py-2 px-2.5 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                    href="/"
                  >
                    <img
                      class="shrink-0 size-5 rounded-full"
                      src="https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <span
                      class="text-sm text-gray-800"
                      data-hs-combo-box-search-text="Martin Azara"
                      data-hs-combo-box-value=""
                      >Martin Azara</span
                    >
                    <span
                      class="ms-auto text-xs text-gray-400"
                      data-hs-combo-box-search-text="Offline"
                      data-hs-combo-box-value=""
                      >Offline</span
                    >
                  </a>
                </div>
              </div>
            </div>
            <!-- End SearchBox Dropdown -->
          </div>
          <!-- End SearchBox -->
        </div>
      </div>
    </div>
    <div class="flex w-full justify-center">
      <div
        class="w-full max-w-md p-4 bg-emerald-50 border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex items-center justify-between mb-4">
          <h5
            class="text-xl font-bold leading-none text-gray-900 dark:text-white"
          >
            Próximos Eventos
          </h5>
          <a
            href="#"
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
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
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Clases - Tennis 1
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Cancha 10 - Paddle Grande
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
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
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Bonnie Green
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  $3467
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Michael Gough
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  $67
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    alt="Lana image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Lana Byrd
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  $367
                </div>
              </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
              <div class="flex items-center">
                <div class="shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Thomas image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Thomes Lean
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  $2367
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
