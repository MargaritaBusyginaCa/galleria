import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaintingStore = defineStore("painting", () => {
  const index = ref(0);
  const slideshowStarted = ref(false);
  function increment() {
    index.value++;
  }
  function decrement() {
    index.value--;
  }
  function setIndex(newIndex) {
    index.value = newIndex;
  }
  function setSlideshow(newValue) {
    slideshowStarted.value = newValue;
  }
  return {
    index,
    slideshowStarted,
    increment,
    decrement,
    setIndex,
    setSlideshow,
  };
});
