<script setup>
import { computed } from "vue";
import logo from "../assets/icons/logo.svg";
const slideshow = computed(() => {
  return "start slideshow";
});
</script>
<template>
  <div class="flex justify-between pb-[40px]">
    <router-link to="/"> <img :src="logo" alt="galleria logo" /></router-link>
    <p class="tracking-[2.57px] text-[12px]">
      <router-link to="/art-p iece">{{
        slideshow.toLocaleUpperCase()
      }}</router-link>
    </p>
  </div>
</template>
