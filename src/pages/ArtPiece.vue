<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import content from "../assets/content.json";
import Footer from "../components/Footer.vue";
import ViewPaintingModal from "../components/ViewPaintingModal.vue";
import viewImageIcon from "../assets/icons/icon-view-image.svg";
const route = useRoute();
const paintingIndex = ref(route.params.id);
const paintingImagePath = computed(() => {
  return new URL(
    content[paintingIndex.value].images.hero.small,
    import.meta.url
  );
});
const artistImagePath = computed(() => {
  return new URL(content[paintingIndex.value].artist.image, import.meta.url);
});
function nextPainting(value) {
  paintingIndex.value = value;
}
function previousPainting(value) {
  paintingIndex.value = value;
}

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};
const closeModal = () => {
  showModal.value = false;
};
</script>
<template>
  <main class="art-piece-container">
    <div class="art-piece">
      <div class="painting--visual">
        <div class="painting-hero">
          <img :src="paintingImagePath" :alt="content[paintingIndex].name" />
          <div class="view-image" @click="openModal">
            <img :src="viewImageIcon" alt="view image" />
            <span>VIEW IMAGE</span>
          </div>
        </div>
        <div class="painting-name-artist">
          <div class="painting-name">
            <h1>{{ content[paintingIndex].name }}</h1>
            <p>{{ content[paintingIndex].artist.name }}</p>
          </div>
          <div class="artist">
            <img :src="artistImagePath" alt="" />
          </div>
        </div>
      </div>

      <div class="painting-information">
        <p class="year">{{ content[paintingIndex].year }}</p>
        <p class="history">
          {{ content[paintingIndex].description }}
        </p>

        <a
          :href="content[paintingIndex].source"
          target="_blank"
          class="source-link"
          >Go to sourse</a
        >
      </div>
    </div>
    <ViewPaintingModal
      :show-modal="showModal"
      :painting-index="paintingIndex"
      @close-modal="closeModal"
    />
    <Footer
      @next-painting="nextPainting"
      @previous-painting="previousPainting"
    />
  </main>
</template>

<style lang="scss">
@import "../assets/scss/variables.scss";
.art-piece-container {
  min-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 80px;
}
.art-piece {
  display: flex;
  gap: 100px;
  .painting--visual {
    display: flex;
    .painting-hero {
      position: relative;

      img {
        width: 475px;
        height: 560px;
        object-fit: cover;
      }
      .view-image {
        display: flex;
        gap: 14px;
        margin: 16px;
        padding: 14px 16px;
        font-size: 10px;
        letter-spacing: 2.14px;
        color: $white;
        background-color: $black;
        position: absolute;
        bottom: 0;
        img {
          height: 12px;
          width: 12px;
        }
      }
    }
    .painting-name-artist {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .painting-name {
        max-width: 380px;
        padding-left: 65px;
        padding-bottom: 67px;
        margin-left: -65px;
        background-color: $white;
        z-index: 1;
      }
      .artist {
        margin-left: 30px;
        margin-bottom: -50px;
      }
    }
  }
  //left part of the screen that contains painting history
  .painting-information {
    max-width: 380px;
    .year {
      line-height: 150px;
      font-size: 200px;
      color: $light_grey;
      z-index: -1;
      margin-bottom: -40px;
    }
    .history {
      max-width: 350px;
      line-height: 28px;
    }
    .source-link {
      text-transform: uppercase;
      font-size: 9px;
      text-decoration: underline;
      letter-spacing: 1.93px;
      color: $dark_grey;
      margin-top: 30px;
    }
  }
}
</style>
