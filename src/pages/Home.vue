<script setup>
import GalleryPainting from "../components/GalleryPainting.vue";
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
