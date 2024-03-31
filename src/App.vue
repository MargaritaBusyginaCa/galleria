<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="app">
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/theme.scss";
.app {
  width: 100%;
  height: 100vh;
}
</style>
