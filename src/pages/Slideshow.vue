<script setup>
import { usePaintingStore } from "@/stores/painting";
import PaintingMain from "@/components/PaintingMain.vue";
import PaintingHistory from "@/components/PaintingHistory.vue";
import Footer from "@/components/Footer.vue";
import { onMounted } from "vue";

const paintingStore = usePaintingStore();
onMounted(() => {
  paintingStore.setIndex(parseInt(localStorage.getItem("index")));
  paintingStore.setSlideshow(true);
});
</script>
<template>
  <main>
    <div class="painting-information">
      <PaintingMain />
      <PaintingHistory />
    </div>
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
main {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.painting-information {
  padding: $spacing_main;
  padding-top: 70px;
  display: grid;
  grid-template-columns: 65% 35%;
}

//smaller desktop
@media (max-width: 1320px) {
  .painting-information {
    grid-template-columns: 1fr;
  }
}

//mobile
@media (max-width: 740px) {
  .painting-information {
    padding: 24px;
    padding: $spacing_main;
  }
}
</style>
