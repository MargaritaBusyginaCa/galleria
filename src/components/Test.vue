<script setup>
import { computed, onMounted } from "vue";
import { usePaintingStore } from "@/stores/painting";
import content from "@/assets/content.json";
const paintingStore = usePaintingStore();
const imagePath = computed(() => {
  return new URL(content[paintingStore.index].images.gallery, import.meta.url);
});
onMounted(() => {
  console.log(imagePath.value);
});
</script>
<template>
  <div class="painting-main">
    <div class="image">
      <img :src="imagePath" />
    </div>
    <div class="description">
      <h1>
        {{ content[paintingStore.index].name }}
      </h1>
      <p>{{ content[paintingStore.index].artist.name }}</p>
    </div>
  </div>
</template>
