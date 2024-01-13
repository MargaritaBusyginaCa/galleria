<script setup>
import backButton from "../assets/icons/icon-back-button.svg";
import nextButton from "../assets/icons/icon-next-button.svg";
import content from "../assets/content.json";
import { computed, ref } from "vue";

const props = defineProps({
  paintingIndex: {
    type: Number,
    default: 0,
  },
});
const currentIndex = ref(props.paintingIndex);
const nextPath = computed(() => {
  let nextIndex = +props.paintingIndex + 1;
  currentIndex.value = nextIndex;
  return `/art-piece/${nextIndex}`;
});
const previousPath = computed(() => {
  let previousIndex = +props.paintingIndex - 1;
  currentIndex.value = previousIndex;
  return `/art-piece/${previousIndex}`;
});
</script>
<template>
  <div class="flex justify-between items-center">
    <div>
      <p>{{ content[paintingIndex].name }}</p>
      <p>{{ content[paintingIndex].artist.name }}</p>
    </div>
    <div class="flex gap-[40px]">
      <router-link :to="previousPath">
        <img :src="backButton" alt="go-back-button" />
      </router-link>
      <router-link :to="nextPath">
        <img :src="nextButton" alt="go-next-button" />
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
</style>
