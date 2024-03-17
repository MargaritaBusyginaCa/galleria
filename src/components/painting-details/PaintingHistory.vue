<script setup>
import { usePaintingStore } from "@/stores/painting";
import content from "@/assets/content.json";
const paintingStore = usePaintingStore();
</script>
<template>
  <p>{{ content[paintingStore.index].name }}</p>
</template>
