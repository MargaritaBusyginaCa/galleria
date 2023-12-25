<script setup>
import { ref, computed, onMounted } from "vue";
const folders = ref([
  "arnolfini-portrait",
  "girl-with-pearl-earring",
  "guernica",
  "lady-with-an-ermine",
  "mona-lisa",
  "pentient-magdalene",
  "starry-night",
  "the-basket-of-apples",
  "the-boy-in-the-red-vest",
  "the-great-wave-off-kanagawa",
  "the-night-cafe",
  "the-sleeping-gypsy",
  "the-storm-on-the-sea-of-galilee",
  "the-swing",
  "van-gogh-self-portrait",
]);

const imagePaths = computed(() => {
  return folders.value.map(
    (folder) =>
      new URL(`../assets/content/${folder}/gallery.jpg`, import.meta.url)
  );
});
onMounted(() => {
  var grid = document.querySelector("my-grid");
  waterfall(grid);
});
</script>
<template>
  <div v-for="(imagePath, index) in imagePaths" :key="index" class="my-grid">
    <div class="item"><img :src="imagePath" alt="" /></div>
  </div>
</template>
