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
.gallery-view {
  display: grid;
  grid-template-columns: repeat(5, auto);
}
</style>
