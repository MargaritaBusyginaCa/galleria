<script setup>
import backButton from "../assets/icons/icon-back-button.svg";
import nextButton from "../assets/icons/icon-next-button.svg";
import content from "../assets/content.json";
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";

const route = useRoute();
const router = useRouter();
const currentIndex = ref(route.params.id);
const emit = defineEmits(["nextPainting", "previousPainting"]);
function nextPainting() {
  if (currentIndex.value != content.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }

  navigate();
  emit("nextPainting", currentIndex.value);
}
function previousPainting() {
  if (currentIndex.value != 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = content.length - 1;
  }
  navigate();
  emit("previousPainting", currentIndex.value);
}
const navigate = () => {
  router.push({
    name: "ArtPiece",
    params: { id: currentIndex.value },
  });
};
const activeTab = computed(() => {
  const totalPaintings = content.length;
  let currentPainting = currentIndex.value;
  const finalPercentage =
    Math.round((++currentPainting / totalPaintings) * 10000) / 100;

  return `${finalPercentage}%`;
});
</script>
<template>
  <section>
    <div class="stepper">
      <div class="active-tab"></div>
    </div>
    <div class="flex justify-between items-center">
      <div>
        <p>{{ content[currentIndex].name }}</p>
        <p>{{ content[currentIndex].artist.name }}</p>
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
  </section>
</template>
<style lang="scss">
@import "../assets/scss/variables.scss";
.stepper {
  width: 100%;
  height: 2px;
  background-color: $light_grey;
  margin-bottom: 24px;
  .active-tab {
    width: v-bind(activeTab);
    height: 2px;
    background-color: $black;
  }
}
</style>
