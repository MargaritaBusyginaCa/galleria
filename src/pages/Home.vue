<script setup>
import { computed } from "vue";
import content from "../assets/content.json";

const imagePaths = computed(() => {
  return content.map(
    (piece) => new URL(piece.images.thumbnail.path, import.meta.url)
  );
});
</script>
<template>
  <div class="container">
    <div v-for="(imagePath, index) in imagePaths" :key="index" class="box">
      <img
        :src="imagePath"
        alt=""
        :style="`height:${content[index].images.thumbnail.height}px`"
      />
    </div>
  </div>
</template>
<style lang="scss">
.container {
  columns: 4;
  column-gap: 40px;
}
.box {
  width: 100%;
  margin-bottom: 40px;
  break-inside: avoid;
  img {
    width: 310px;
  }
}

@media (max-width: 1200px) {
  .container {
    width: calc(100% - 40px);
    columns: 4;
  }
}
@media (max-width: 786px) {
  .container {
    columns: 2;
  }
}
@media (max-width: 586px) {
  .container {
    columns: 1;
  }
}
</style>
