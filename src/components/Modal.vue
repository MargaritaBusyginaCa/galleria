<script setup>
import { usePaintingStore } from "@/stores/painting";
import content from "@/assets/content.json";
import { computed } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const paintingStore = usePaintingStore();
const imagePath = computed(() => {
  return new URL(content[paintingStore.index].images.gallery, import.meta.url);
});
const imagePathForMobile = computed(() => {
  return new URL(
    content[paintingStore.index].images.hero.small,
    import.meta.url
  );
});

const emit = defineEmits(["close-modal"]);
function closeModal() {
  emit("close-modal");
}
</script>

<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <button class="close" @click="closeModal"><p>CLOSE</p></button>
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
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.modal {
  position: fixed;
  z-index: 2;
  padding-top: 10px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.814); /* Black w/ opacity */

  .modal-content {
    margin: 0 auto;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    .image {
      .mobile-hero {
        display: none;
      }
      img {
        width: 100%;
      }
    }
    .close {
      background-color: transparent;
      border: none;
      align-self: flex-end;
      font-family: $font-primary;
      p {
        font-size: 14px;
        letter-spacing: 3px;
        color: $white;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}

//smaller desktop
@media (max-width: 1320px) {
  .image {
    .mobile-hero {
      display: block !important;
    }
    .large-hero {
      display: none;
    }
  }
}
</style>
