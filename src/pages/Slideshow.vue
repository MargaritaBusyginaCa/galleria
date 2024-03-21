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
  paintingStore.setIndex(parseInt(localStorage.getItem("index")));
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
  padding: $padding_main;
  padding-top: 70px;
  display: grid;
  grid-template-columns: 65% 35%;
}
</style>
