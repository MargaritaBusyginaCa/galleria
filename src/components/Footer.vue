<script setup>
import backButton from "../assets/icons/icon-back-button.svg";
import nextButton from "../assets/icons/icon-next-button.svg";
import content from "../assets/content.json";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const props = defineProps({
  paintingIndex: {
    type: Number,
    default: 0,
  },
});
const currentIndex = ref(props.paintingIndex);
const emit = defineEmits(["nextPainting", "previousPainting"]);
function nextPainting() {
  currentIndex.value++;
  navigate();
  emit("nextPainting", currentIndex.value);
}
function previousPainting() {
  currentIndex.value--;
  navigate();
  emit("previousPainting", currentIndex.value);
}
const navigate = () => {
  router.push({
    name: "ArtPiece",
    params: { id: currentIndex.value },
  });
};
</script>
<template>
  <div class="flex justify-between items-center">
    <div>
      <p>{{ content[paintingIndex].name }}</p>
      <p>{{ content[paintingIndex].artist.name }}</p>
    </div>
    <div class="flex gap-[40px]">
      <button @click="previousPainting">
        <img :src="backButton" alt="go-back-button" />
      </button>

      <button @click="nextPainting">
        <img :src="nextButton" alt="go-next-button" />
      </button>
    </div>
  </div>
</template>
