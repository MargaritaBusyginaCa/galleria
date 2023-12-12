<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/art-piece">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
@import "./assets/scss/variables.scss";
@import "./assets/scss/theme.scss";
</style>
