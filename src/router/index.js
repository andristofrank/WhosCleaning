/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import Schedule from "@/components/Schedule";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/schedule",
      name: "Schedule",
      component: Schedule
    },
    {
      path: "/SignIn",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/SignUp",
      name: "SignIn",
      component: SignUp
    }
  ]
});
