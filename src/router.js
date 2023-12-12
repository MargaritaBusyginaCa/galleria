import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import ArtPiece from "./pages/ArtPiece.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/art-piece", component: ArtPiece },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
