import Home from "./views/Home.vue";
import About from "./views/About.vue";
import ErrorPage from "./components/ErrorPage.vue";

export default [
  { name: "about",path: "/about",component: About},
  { name: "errorPage ",path: "/:pathMatch(.*)",component: ErrorPage},
  { name: "home",path: "/",component: Home},
  
];
