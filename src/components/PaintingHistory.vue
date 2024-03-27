<script setup>
import { usePaintingStore } from "@/stores/painting";
import content from "@/assets/content.json";
const paintingStore = usePaintingStore();
const goToSource = "Go to Source";
</script>

<template>
  <div class="painting-history">
    <p class="year">{{ content[paintingStore.index].year }}</p>
    <p class="description">{{ content[paintingStore.index].description }}</p>
    <a :href="content[paintingStore.index].source" class="source">{{
      goToSource
    }}</a>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.painting-history {
  .year {
    z-index: -1;
    font-size: 200px;
    opacity: 0.1;
    margin: 70px 0 0 0;
  }
  .description {
    max-width: 400px;
    font-size: 14px;
    line-height: 28px;
  }
  .source {
    color: $dark_grey;
    text-transform: uppercase;
    font-size: 9px;
    font-weight: bold;
    letter-spacing: 1.93px;
    &:hover {
      color: $black;
    }
  }
}

//smaller desktop
@media (max-width: 1320px) {
  .painting-history {
    padding: $spacing_main;

    .description {
      max-width: 700px;
    }
  }
}

// mobile
@media (max-width: 740px) {
  .painting-history {
    padding: 0;

    .year {
      font-size: 100px;
      margin-top: 0;
      text-align: right;
    }
  }
}
</style>
