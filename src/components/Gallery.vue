<script setup>
import { computed } from "vue";
import { usePaintingStore } from "@/stores/painting";
import content from "@/assets/content.json";
const paintingStore = usePaintingStore();

const paintingsPath = computed(() => {
  return content.map((piece) => new URL(piece.images.gallery, import.meta.url));
});
</script>

<template>
  <div v-for="(painting, index) in content" :key="painting" class="painting">
    <img :src="paintingsPath[index]" :alt="painting.name" />
    <div class="painting-info">
      <p>{{ painting.name }}</p>
      <p>{{ painting.artist.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.painting {
  //To-Do: delete height later
  height: 400px;
  position: relative;
  :hover {
    cursor: pointer;
  }
  img {
    height: 100%;
    width: 100%;
  }
  .painting-info {
    position: absolute;
    top: 0;
    z-index: 1;
    background-color: black;
    p {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
