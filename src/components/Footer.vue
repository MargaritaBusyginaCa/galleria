<script setup>
import { usePaintingStore } from "@/stores/painting";
import { useRouter } from "vue-router";
import content from "@/assets/content.json";
import goNextIcon from "@/assets/icons/icon-next-button.svg";
import goBackIcon from "@/assets/icons/icon-back-button.svg";
const router = useRouter();
const paintingStore = usePaintingStore();

function goNext() {
  paintingStore.increment();
  navigate();
}
function goPrevious() {
  paintingStore.decrement();
  navigate();
}
function navigate() {
  router.push({
    name: "Slideshow",
    params: { id: paintingStore.index },
  });
}
</script>

<template>
  <footer>
    <div class="painting-info">
      <h2>{{ content[paintingStore.index].name }}</h2>
      <span>{{ content[paintingStore.index].artist.name }}</span>
    </div>
    <div class="buttons">
      <button @click="goPrevious"><img :src="goBackIcon" /></button>
      <button @click="goNext"><img :src="goNextIcon" /></button>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid black;
  h2 {
    color: $black;
    font-weight: 700;
    font-size: 18px;
    margin: 0;
  }
  span {
    font-size: 13px;
    color: $black;
    font-weight: 400;
  }
  .buttons {
    display: flex;
    gap: 20px;
    button {
      background-color: transparent;
      border: none;
    }
  }
}
</style>
