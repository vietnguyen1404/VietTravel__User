// import { createRouter, createWebHistory } from "vue-router";
import VueRouter from "vue-router";
import routes from "./router/index";

const router = new VueRouter({
    // history: VueRouter.createWebHistory(),
    routes,
    mode : 'history'
});

export default router;
