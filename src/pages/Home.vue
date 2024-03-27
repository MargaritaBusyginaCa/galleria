<script setup>
import { usePaintingStore } from "@/stores/painting";
import GalleryPainting from "../components/GalleryPainting.vue";
import { onMounted } from "vue";

const paintingStore = usePaintingStore();
onMounted(() => {
  localStorage.setItem("index", 0);
  paintingStore.setSlideshow(false);
});
</script>
<template>
  <div class="gallery-view">
    <GalleryPainting />
  </div>
</template>
<style lang="scss">
@import "@/assets/scss/variables.scss";
.gallery-view {
  padding: $spacing_main;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: $spacing_main;
}
</style>
