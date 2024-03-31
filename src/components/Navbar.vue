<script setup>
import { transformToRouteName } from "@/utils/transformToRouteName.js";
import logo from "../../public/icons/logo.svg";
import content from "@/assets/content.json";
import { computed } from "vue";
import { usePaintingStore } from "@/stores/painting";

const paintingStore = usePaintingStore();
const slideshowLink = computed(() => {
  if (paintingStore.slideshowStarted) {
    return { label: "Stop slideshow", name: "Home", to: "/" };
  } else {
    return {
      label: "Start slideshow",
      name: "Slideshow",
      params: { name: transformToRouteName(content[0].name) },
    };
  }
});
</script>

<template>
  <div class="navbar">
    <router-link to="/">
      <img :src="logo" alt="galleria logo" class="logo"
    /></router-link>
    <router-link
      :to="{
        name: slideshowLink.name,
        params: slideshowLink.params,
      }"
    >
      <p>{{ slideshowLink.label }}</p>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
.navbar {
  border-bottom: 1px solid $alt_grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  margin: 0 $spacing_main;

  a {
    text-decoration: none;
  }
  p {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2.57px;
    color: $dark_grey;
    &:hover {
      color: $black;
    }
  }
}

//mobile
@media (max-width: 740px) {
  .navbar {
    margin: 0;
    padding: 20px $spacing_main;
    p {
      font-size: 9px;
    }
    .logo {
      height: 32px;
    }
  }
}
</style>
