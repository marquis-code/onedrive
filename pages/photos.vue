<template>
  <main>
    <div class="space-y-6">
      <h1 class="font-bold text-xl">PHOTOS</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        <div
          @click="handleFile"
          v-for="(file, idx) in allFiles"
          :key="idx"
          class="border rounded-md cursor-pointer"
        >
          <div class="p-3">
            <img
              :src="require(`@/assets/img/${file.image}`)"
              alt=""
              class="h-60 w-full"
            />
          </div>
          <div class="border-t">
            <div class="flex justify-center items-center gap-x-3 py-2">
              <img
                :src="require(`@/assets/icons/${file.docImgUrl}`)"
                class="h-6 w-6"
                alt=""
              />
              <p class="pt-3">{{ file.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="bv-modal-example"
      hide-footer
      hide-header
      centered
      title="BootstrapVue"
      body-bg-variant="light"
    >
      <div class="p-10 space-y-4">
        <div>
          <div class="flex items-center gap-x-3">
            <img src="@/assets/icons/microsoft.svg" class="h-6 w-6" alt="" />
            <p class="font-semibold text-gray-500 text-lg pt-3">Microsoft</p>
          </div>
          <h3 class="font-bold text-gray-800">Sign in</h3>
        </div>
        <div class="w-full pt-4">
          <input
            placeholder="Email, phone, or Skype"
            class="border-b border-gray-500 text-gray-700 bg-gray-50 outline-none w-full pb-2"
          />
        </div>
        <div class="flex justify-end items-end mt-3">
          <button
            @click="$bvModal.hide('bv-modal-example')"
            class="text-white bg-blue-900 px-10 py-2 text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </b-modal>
  </main>
</template>
<script>
export default {
  data() {
    return {
      allFiles: [
        {
          name: "Purchase.pdf",
          docImgUrl: "pdf.svg",
          image: "purchase.png",
        },
        {
          name: "Specification.xlsx",
          docImgUrl: "xlsx.svg",
          image: "specifications.png",
        },
        {
          name: "Drawaings_sketches.png",
          docImgUrl: "png.svg",
          image: "sketches.png",
        },
      ],
    };
  },
  methods: {
    handleFile() {
      this.$bvModal.show("bv-modal-example");
    },
  },
};
</script>

<style>
</style>
