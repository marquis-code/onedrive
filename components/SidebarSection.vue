<template>
  <div
    class="flex h-screen flex-col justify-between border-e bg-gray-100"
  >
    <div class="">
      <ul class="-mt-4">
        <li v-for="(item, index) in sidebarItems" :key="index" class="pr-6">
          <nuxt-link
            :to="item.path"
            :class="[
              item.path === $route.path ? 'font-semibold' : '',
            ]"
            href=""
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
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
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
};
</script>

<style scoped>
a.nuxt-link-exact-active {
  color: #444444 !important;
  font-weight: 900;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}
</style>
