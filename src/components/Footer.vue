<script setup>
import { usePaintingStore } from "@/stores/painting";
import { useRouter } from "vue-router";
import content from "@/assets/content.json";
import goNextIcon from "@/assets/icons/icon-next-button.svg";
import goBackIcon from "@/assets/icons/icon-back-button.svg";
import goNextIconDisabled from "@/assets/icons/icon-next-button-disabled.svg";
import goBackIconDisabled from "@/assets/icons/icon-back-button-disabled.svg";
import { computed } from "vue";
import { transformToRouteName } from "@/utils/transformToRouteName.js";

const router = useRouter();
const paintingStore = usePaintingStore();
const isLastPainting = computed(() => {
  return parseInt(paintingStore.index) == content.length - 1;
});
const isFirstPainting = computed(() => {
  return parseInt(paintingStore.index) == 0;
});
function goNext() {
  if (!isLastPainting.value) {
    paintingStore.increment();
  }
  navigate();
}
function goPrevious() {
  if (!isFirstPainting.value) {
    paintingStore.decrement();
  }
  navigate();
}
function navigate() {
  const paintingName = content[paintingStore.index].name;
  router.push({
    name: "Slideshow",
    params: {
      name: transformToRouteName(paintingName),
    },
  });
  localStorage.setItem("index", paintingStore.index);
}

const progress = computed(() => {
  const currentPaintingNumber = parseInt(paintingStore.index) + 1;
  const percentage = (currentPaintingNumber * 100) / content.length;
  return `${Math.round(percentage)}%`;
});
</script>

<template>
  <footer>
    <div class="progress-bar"></div>
    <div class="painting-info">
      <h2>{{ content[paintingStore.index].name }}</h2>
      <span>{{ content[paintingStore.index].artist.name }}</span>
    </div>
    <div class="buttons">
      <button @click="goPrevious">
        <img
          :src="isFirstPainting ? goBackIconDisabled : goBackIcon"
          alt="go back"
        />
      </button>
      <button @click="goNext">
        <img
          :src="isLastPainting ? goNextIconDisabled : goNextIcon"
          alt="go next"
          disabled="true"
        />
      </button>
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
  border-top: 1px solid $alt_grey;
  position: relative;
  .progress-bar {
    position: absolute;
    top: 0;
    width: v-bind(progress);
    border-bottom: 1px solid $dark_grey;
  }

  .painting-info {
    padding: 0 50px;
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
  }

  .buttons {
    padding: 0 50px;
    display: flex;
    gap: 20px;
    button {
      background-color: transparent;
      border: none;
    }
  }
}
</style>
