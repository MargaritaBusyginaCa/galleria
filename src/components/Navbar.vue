<script setup>
import logo from "@/assets/icons/logo.svg";
</script>

<template>
  <div class="navbar">
    <router-link to="/"> <img :src="logo" alt="galleria logo" /></router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.navbar {
  padding-bottom: 20px;
  border-bottom: 1px solid $alt_grey;
}
</style>
