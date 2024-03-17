<script setup>
import Navbar from "@/components/Navbar.vue";
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
  padding: 40px 40px 0 40px;
  width: 100%;
  height: 100vh;
}
</style>
