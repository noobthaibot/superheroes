import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/add-hero",
    name: "add-hero",
    component: () => import("../views/AddHeroPage.vue"),
  },
  {
    path: "/heroes/:heroId",
    name: "edit-hero",
    component: () => import("../views/EditHeroPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
