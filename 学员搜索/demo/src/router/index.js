import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
  },

  {
    path: "/index",
    name: "index",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/user",
        name: "user",
        component: () => import("../views/user/Index.vue"),
        children: [
          {
            path: "student",
            name: "student",
            component: () => import("../views/user/Student.vue"),
          },
          {
            path: "teacher",
            name: "teacher",
            component: () => import("../views/user/Teacher.vue"),
          },
          {
            path: "helper",
            name: "helper",
            component: () => import("../views/user/Helper.vue"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
