<script setup>
import { usePaintingStore } from "@/stores/painting";
import { useRouter } from "vue-router";

const router = useRouter();
const paintingStore = usePaintingStore();

function goNext() {
  paintingStore.increment();
  navigate();
}
function goPrevious() {
  paintingStore.decrement();
  navigate();
}
function navigate() {
  router.push({
    name: "Slideshow",
    params: { id: paintingStore.index },
  });
}
</script>

<template>
  <button @click="goPrevious">Previous</button>
  <button @click="goNext">Next</button>
</template>
