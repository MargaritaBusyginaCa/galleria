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
  <section>
    <div class="painting-information">
      <PaintingMain />
      <PaintingHistory />
    </div>
    <Footer />
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.painting-information {
  padding-top: 70px;
  display: grid;
  grid-template-columns: 65% 35%;
}
</style>
