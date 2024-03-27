<script setup>
import { computed } from "vue";
import { usePaintingStore } from "@/stores/painting";
import content from "@/assets/content.json";
import { useRouter } from "vue-router";
import { transformToRouteName } from "@/utils/transformToRouteName.js";

const router = useRouter();
const paintingStore = usePaintingStore();
const paintingsPath = computed(() => {
  return content.map((piece) => new URL(piece.images.gallery, import.meta.url));
});
function viewPainting(index) {
  const paintingName = content[index].name;
  router.push({
    name: "Slideshow",
    params: { name: transformToRouteName(paintingName) },
  });
  paintingStore.setIndex(index);
  localStorage.setItem("index", index);
}
</script>

<template>
  <div
    v-for="(painting, index) in content"
    :key="painting"
    class="painting"
    @click="viewPainting(index)"
  >
    <img :src="paintingsPath[index]" :alt="painting.name" />
    <div class="painting-info">
      <p>{{ painting.name }}</p>
      <p>{{ painting.artist.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.painting {
  height: fit-content;
  width: fit-content;
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

//mobile
@media (max-width: 740px) {
  .painting {
    height: unset;
    width: unset;
  }
}
</style>
