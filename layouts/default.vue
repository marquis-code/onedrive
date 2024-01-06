<template>
  <main>
    <div class="relative w-full">
      <div class="bg-blue-500 sticky top-0">
        <div class="max-w-screen-2xl mx-auto pl-6 lg:pl-0">
          <div class="flex items-center gap-x-6 py-4">
            <div class="hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <div class="lg:hidden">
              <button v-b-toggle.sidebar-backdrop>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
            </div>
            <h2 class="font-semibold text-white">OneDrive</h2>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-2/12 h-screen hidden lg:block">
          <SidebarSection class="pt-10 pl-14" />
        </div>
        <div class="md:w-10/12 w-full p-6 lg:p-10 h-screen">
          <nuxt />
        </div>
      </div>
    </div>
    <b-sidebar id="sidebar-backdrop" no-header no-footer backdrop shadow>
      <template #default="{ hide }">
        <div class="">
          <div class="flex items-center justify-between gap-x-6 py-4 px-10">
            <h2 class="font-semibold text-blue-500">OneDrive</h2>
            <button @click="hide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <ul class="-mt-4">
            <li v-for="(item, index) in sidebarItems" :key="index" class="pr-6">
              <nuxt-link
                :to="item.path"
                :class="[item.path === $route.path ? 'font-semibold' : '']"
                @click.native="hide"
                class="px-4 py-3 text-sm font-light text-gray-700 rounded-md flex justify-between items-center no-underline"
              >
                <div class="flex items-center gap-x-2">
                  <img
                    :src="require(`~/assets/icons/${item.icon}.svg`)"
                    alt=""
                    class="h-6 w-6"
                  />
                  <span
                    :class="[
                      item.path === $route.path ? 'font-bold' : 'font-normal',
                    ]"
                  >
                    {{ item.name }}</span
                  >
                </div>
              </nuxt-link>
            </li>
          </ul>

          <!-- <div class="ml-14">
          <button class="text-red-500 font-medium flex items-center gap-x-2">
            <img src="~/assets/icons/logout.svg" alt="logout icon" />
            <span> Logout </span>
          </button>
        </div> -->
        </div>
      </template>
    </b-sidebar>
  </main>
</template>

<script>
import Vue from "vue";
import SidebarSection from "@/components/SidebarSection.vue";
export default {
  components: {
    SidebarSection,
  },
  data() {
    return {
      toggleSidebar: false,
      sidebarItems: [
        {
          name: "My Files",
          icon: "files",
          path: "/",
        },
        {
          name: "Recent",
          icon: "recent",
          path: "/recent",
        },
        {
          name: "Photos",
          icon: "photos",
          path: "/photos",
        },
        {
          name: "Shared",
          icon: "shared",
          path: "/shared",
        },
        {
          name: "Recycle bin",
          icon: "recycle",
          path: "/recycle",
        },
      ],
    };
  },
  head: {
    title: "OneDrive",
    bodyAttrs: {
      class: "font-sans leading-normal tracking-normal",
    },
  },
};
</script>
