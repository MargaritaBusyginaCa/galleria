<script setup>
import Navbar from "@/components/Navbar.vue";
import { usePaintingStore } from "./stores/painting";
const paintingStore = usePaintingStore();
</script>

<template>
  <div class="app">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/variables.scss";
@import "./assets/scss/theme.scss";
.app {
  width: 100%;
  height: 100vh;
}
main {
  padding: 0 50px;
}
</style>
