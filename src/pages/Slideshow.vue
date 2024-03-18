<script setup>
import { usePaintingStore } from "@/stores/painting";
import PaintingMain from "@/components/PaintingMain.vue";
import PaintingHistory from "@/components/PaintingHistory.vue";
// import content from "@/assets/content.json";
import Footer from "@/components/Footer.vue";

const paintingStore = usePaintingStore();
</script>
<template>
  <section class="painting-information">
    <PaintingMain />
    <PaintingHistory />
  </section>
  <Footer />
</template>

<style lang="scss" scoped>
.painting-information {
  margin-top: 70px;
  display: grid;
  grid-template-columns: 65% 35%;
}
</style>
