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
  columns: 4;
  column-gap: $spacing_main;
  > div {
    margin-bottom: 40px;
  }
}

//smaller desktop
@media (max-width: 1320px) {
  .gallery-view {
    columns: 3;
  }
}

//tablet
@media (max-width: 990px) {
  .gallery-view {
    columns: 2;
  }
}

//mobile
@media (max-width: 620px) {
  .gallery-view {
    columns: 1;
    padding: 20px;
    > div {
      margin-bottom: 20px;
    }
  }
}
</style>
