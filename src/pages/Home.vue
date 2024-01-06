<script setup>
import { computed, onMounted } from "vue";
import content from "../assets/content.json";
import Macy from "macy";
import { useRouter } from "vue-router";
const router = useRouter();
const imagePaths = computed(() => {
  return content.map(
    (piece) => new URL(piece.images.thumbnail, import.meta.url)
  );
});

//instanciating macy layout instance
onMounted(() => {
  Macy({
    container: "#macy-container",
    trueOrder: true,
    mobileFirst: true,
    margin: 40,
    columns: 3,
    breakAt: {
      1000: 4,
      650: {
        margin: 40,
        columns: 2,
      },
    },
  });
});

const navigate = (paintingIndex) => {
  router.push({
    name: "ArtPiece",
    params: { id: paintingIndex },
  });
};
</script>
<template>
  <div class="container--main" id="macy-container">
    <div
      v-for="(imagePath, index) in imagePaths"
      :key="index"
      class="item-container"
    >
      <img :src="imagePath" alt="" @click="navigate(index)" />
    </div>
  </div>
</template>
