<script setup>
import { computed, ref } from "vue";
import { usePaintingStore } from "@/stores/painting";
import content from "@/assets/content.json";
import Modal from "./Modal.vue";

const paintingStore = usePaintingStore();
const imagePath = computed(() => {
  return new URL(
    content[paintingStore.index].images.hero.large,
    import.meta.url
  );
});
const imagePathForMobile = computed(() => {
  return new URL(
    content[paintingStore.index].images.hero.small,
    import.meta.url
  );
});
const artistImagePath = computed(() => {
  return new URL(content[paintingStore.index].artist.image, import.meta.url);
});
const viewImageText = "View Image";
const viewImagePath = new URL(
  "@/assets/icons/icon-view-image.svg",
  import.meta.url
);
const visible = ref(true);
function openModal() {
  visible.value = true;
}
function closeModal() {
  visible.value = false;
}
</script>

<template>
  <Modal :visible="visible" @close-modal="closeModal" />
  <div class="painting-main">
    <div class="image">
      <img
        :src="imagePath"
        :alt="content[paintingStore.index].name"
        class="large-hero"
      />
      <img
        :src="imagePathForMobile"
        :alt="content[paintingStore.index].name"
        class="mobile-hero"
      />
      <div class="view-image" @click="openModal">
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
    .mobile-hero {
      display: none;
    }
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
    height: 12px;
    opacity: 0.8;
    &:hover {
      background-color: $dark_grey;
      cursor: pointer;
    }
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

//smaller desktop
@media (max-width: 1320px) {
  .painting-main {
    .description {
      margin-left: -150px;
    }
    .artist-image {
      margin-top: 350px;
      margin-left: -150px;
    }
  }
}

//mobile
@media (max-width: 740px) {
  .painting-main {
    flex-direction: column;
    .image {
      .large-hero {
        display: none;
      }
      .mobile-hero {
        display: unset;
      }
      img {
        width: 100%;
      }
    }
    .view-image {
      top: 0;
      img {
        width: 12px;
      }
    }
    .description {
      margin-left: unset;
      margin-top: -100px;
      padding: 24px;
      max-width: 80%;
      h1 {
        font-size: 24px;
        line-height: 26px;
      }
      p {
        margin: 0;
        font-size: 15px;
      }
    }
    .artist-image {
      margin: unset;
      height: 64px;
      width: 64px;
    }
  }
}
</style>
