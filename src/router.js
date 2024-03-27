import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Slideshow from "@/pages/Slideshow.vue";
const routes = [
  {
    path: "/",
    redirect: "/galleria",
  },
  {
    path: "/galleria",
    name: "Home",
    component: Home,
  },
  {
    path: "/galleria/slideshow/:name",
    name: "Slideshow",
    component: Slideshow,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
