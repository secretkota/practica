<script setup lang="ts">
</script>

<template>
  <nav class="fixed top-0 z-50 w-full bg-neutral-primary-soft border-b border-default rounded-base shadow-xs">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="top-bar-sidebar" data-drawer-toggle="top-bar-sidebar"
            aria-controls="top-bar-sidebar" type="button"
            class="sm:hidden text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm p-2 focus:outline-none">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
          </button>
          <a href="/" class="flex ms-2 md:me-24">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3" alt="FlowBite Logo" />
            <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
        </div>
        <!-- Notification dropdown -->
        <div class="flex items-center">
          <button type="button" data-dropdown-toggle="notification-dropdown"
            class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">

            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
          <div
            class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700"
            id="notification-dropdown">
            <div
              class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              Language
            </div>
            <ul class="flex flex-col text-white p-3">
              <li class="hover:bg-gray-100 hover:text-black">English</li>
              <li class="hover:bg-gray-100 hover:text-black">Russian</li>
            </ul>
          </div>
          <div class="flex items-center ms-3">
            <div>
              <button type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo">
              </button>
            </div>
            <div class="z-50 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
              id="dropdown-user">
              <div class="px-4 py-3 border-b border-default-medium" role="none">
                <p class="text-sm font-medium text-heading" role="none">
                  Neil Sims
                </p>
                <p class="text-sm text-body truncate" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="p-2 text-sm text-body font-medium" role="none">
                <li>
                  <RouterLink to="/"
                    class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    role="menuitem">Dashboard
                  </RouterLink>
                </li>
                <li>
                  <a href="#"
                    class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#"
                    class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#"
                    class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
