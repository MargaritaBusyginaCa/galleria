<script setup>
import { usePaintingStore } from "@/stores/painting";
import content from "@/assets/content.json";
import PaintingMain from "../components/painting-details/PaintingMain.vue";
import PaintingHistory from "../components/painting-details/PaintingHistory.vue";
import Footer from "@/components/Footer.vue";

const paintingStore = usePaintingStore();
</script>
<template>
  <section class="painting-information">
    <PaintingMain />
    <PaintingHistory />
  </section>
  <!-- <Footer /> -->
</template>

<style lang="scss" scoped>
.painting-information {
  display: grid;
  grid-template-columns: repeat(2, 50%);
}
</style>
