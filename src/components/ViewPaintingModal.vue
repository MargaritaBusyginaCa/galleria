<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import content from "../assets/content.json";
const route = useRoute();
const emit = defineEmits(["openModal", "closeModal"]);
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  paintingIndex: {
    type: Number,
    default: 0,
  },
});
const index = ref(parseInt(props.paintingIndex));
const paintingImagePath = ref(
  new URL(content[index.value].images.hero.large, import.meta.url)
);

function openModal() {
  emit("openModal");
}
function closeModal() {
  emit("closeModal");
}
</script>
<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">Close</span>
      <img :src="paintingImagePath" alt="painting modal" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
  margin: 5% auto; /* 15% from the top and centered */
  width: 50%; /* Could be more or less, depending on screen size */
}

.close {
  color: $white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
