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
      <p class="painting-name">{{ painting.name }}</p>
      <p class="artist-name">{{ painting.artist.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
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
    filter: brightness(60%);
    &:hover {
      opacity: 0.6;
    }
  }
  .painting-info {
    position: absolute;
    bottom: 0;
    width: 90%;
    z-index: 1;

    p {
      padding: 0;
      margin: 0;
      color: $white;
      padding: 0 30px 30px 30px;
    }
    .painting-name {
      font-size: 24px;
      font-weight: 700;
      padding-bottom: 5px;
    }
    .artist-name {
      font-size: 13px;
      font-weight: 400;
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
