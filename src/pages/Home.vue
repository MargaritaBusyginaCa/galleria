<script setup>
import Gallery from "../components/Gallery.vue";
</script>
<template>
  <div class="gallery-view">
    <Gallery />
  </div>
</template>
<style lang="scss">
.gallery-view {
  display: grid;
  grid-template-columns: repeat(5, auto);
}
</style>
