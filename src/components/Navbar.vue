<script setup>
import { computed, ref } from "vue";
import logo from "../assets/icons/logo.svg";
const isSlideShowStarted = ref(false);
const slideshowTitle = computed(() => {
  return isSlideShowStarted.value ? "stop slideshow" : "start slideshow";
});
const slideShowLink = computed(() => {
  return isSlideShowStarted.value ? "/" : "/art-piece/0";
});

const navigateToSlideShow = () => {
  isSlideShowStarted.value = !isSlideShowStarted.value;
};
</script>
<template>
  <main class="flex justify-between mb-[40px]">
    <router-link to="/"> <img :src="logo" alt="galleria logo" /></router-link>
    <p class="tracking-[2.57px] text-[12px]">
      <router-link :to="slideShowLink" @click="navigateToSlideShow">{{
        slideshowTitle.toLocaleUpperCase()
      }}</router-link>
    </p>
  </main>
</template>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
main {
  padding-bottom: 20px;
  border-bottom: 1px solid $alt_grey;
}
</style>
