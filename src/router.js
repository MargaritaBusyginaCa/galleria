import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import ArtPiece from "./pages/ArtPiece.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/art-piece/:id",
    name: "ArtPiece",
    component: ArtPiece,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
