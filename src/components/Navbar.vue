<script setup>
import logo from "@/assets/icons/logo.svg";
const startSlideText = "Start slideshow";
</script>

<template>
  <div class="navbar">
    <router-link to="/"> <img :src="logo" alt="galleria logo" /></router-link>
    <router-link to="/">
      <p>{{ startSlideText }}</p>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.navbar {
  //   padding-bottom: 20px;
  border-bottom: 1px solid $alt_grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin: 0 50px;
  a {
    text-decoration: none;
  }
  p {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2.57px;
  }
}
</style>
