<script setup>
import { computed } from "vue";
import { usePaintingStore } from "@/stores/painting";
import content from "@/assets/content.json";
const paintingStore = usePaintingStore();
const imagePath = computed(() => {
  return new URL(content[paintingStore.index].images.gallery, import.meta.url);
});
const artistImagePath = computed(() => {
  return new URL(content[paintingStore.index].artist.image, import.meta.url);
});
const viewImageText = "View Image";
const viewImagePath = new URL(
  "@/assets/icons/icon-view-image.svg",
  import.meta.url
);
</script>

<template>
  <div class="painting-main">
    <div class="image">
      <img :src="imagePath" :alt="content[paintingStore.index].name" />
      <div class="view-image">
        <img :src="viewImagePath" :alt="viewImageText" />
        <span>{{ viewImageText }}</span>
      </div>
    </div>

    <div class="description">
      <h1>
        {{ content[paintingStore.index].name }}
      </h1>
      <p>{{ content[paintingStore.index].artist.name }}</p>
    </div>
    <img
      class="artist-image"
      :src="artistImagePath"
      :alt="content[paintingStore.index].artist.name"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.painting-main {
  display: flex;
  align-items: flex-start;
  .image {
    position: relative;
    img {
      height: 560px;
      width: 475px;
      object-fit: cover;
    }
  }
  .view-image {
    z-index: 1;
    position: absolute;
    bottom: 0;
    background-color: $black;
    padding: 16px;
    margin: 16px;
    color: $white;
    font-size: 10px;
    letter-spacing: 2.14px;
    text-transform: uppercase;
    display: flex;
    gap: 10px;
    img {
      height: 12px;
      width: 12px;
    }
  }
  .description {
    max-width: 300px;
    padding-left: 60px;
    background-color: $white;
    margin-left: -50px;
    z-index: 1;
    h1 {
      font-size: 56px;
      margin: 0;
    }
    p {
      margin-bottom: 60px;
    }
  }
  .artist-image {
    margin-top: 500px;
    margin-left: -250px;
  }
}

//smaller screen
@media (max-width: 1320px) {
  .painting-main {
    .artist-image {
      margin-top: 350px;
    }
  }
}

// tablet
@media (max-width: 990px) {
  .painting-main {
    .description {
      margin-left: -150px;
    }
    .artist-image {
      margin-left: -150px;
    }
  }
}

//mobile
@media (max-width: 774px) {
}
</style>
