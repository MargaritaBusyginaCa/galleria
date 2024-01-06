<script setup>
import { computed } from "vue";
import logo from "../assets/icons/logo.svg";
const slideshow = computed(() => {
  return "start slideshow";
});
</script>
<template>
  <main class="flex justify-between mb-[100px]">
    <router-link to="/"> <img :src="logo" alt="galleria logo" /></router-link>
    <p class="tracking-[2.57px] text-[12px]">
      <router-link to="/art-piece/0">{{
        slideshow.toLocaleUpperCase()
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
