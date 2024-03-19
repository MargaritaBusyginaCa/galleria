<script setup>
import { usePaintingStore } from "@/stores/painting";
import PaintingMain from "@/components/PaintingMain.vue";
import PaintingHistory from "@/components/PaintingHistory.vue";
import Footer from "@/components/Footer.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const paintingStore = usePaintingStore();
onMounted(() => {
  paintingStore.setIndex(route.params.id);
});
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
