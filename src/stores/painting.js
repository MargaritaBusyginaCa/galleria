import { defineStore } from "pinia";
import { ref } from "vue";
export const usePaintingStore = defineStore("painting", () => {
  const index = ref(0);
  function increment() {
    index.value++;
  }
  function decrement() {
    index.value--;
  }
  function setIndex(newIndex) {
    index.value = newIndex;
  }

  return { index, increment, decrement, setIndex };
});
