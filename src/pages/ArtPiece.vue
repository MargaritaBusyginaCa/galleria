<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import content from "../assets/content.json";

const route = useRoute();
const imageIndex = ref(route.params.id);
const paintingImagePath = new URL(
  content[imageIndex.value].images.hero.small,
  import.meta.url
);
onMounted(() => {});
</script>
<template>
  <main>
    <div class="painting--main">
      <div class="painting-hero">
        <img :src="paintingImagePath" alt="" />
        <div class="view-image">VIEW IMAGE</div>
      </div>
      <div class="painting-name">
        <h1>{{ content[imageIndex].name }}</h1>
        <p>{{ content[imageIndex].artist.name }}</p>
      </div>
    </div>
    <div></div>
  </main>
</template>

<style lang="scss">
@import "../assets/scss/variables.scss";
.painting--main {
  display: flex;
  align-items: flex-start;
  //painting hero image
  .painting-hero {
    width: 475px;
    height: 560px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .view-image {
      margin: 16px;
      padding: 14px 16px;
      font-size: 10px;
      letter-spacing: 2.14px;
      color: $white;
      background-color: $black;
      position: absolute;
      bottom: 0;
    }
  }
  //paitning name
  .painting-name {
    max-width: 380px;
    padding-left: 65px;
    padding-bottom: 67px;
    margin-left: -65px;
    background-color: $white;
    z-index: 1;
    h1 {
    }
  }
}
</style>
