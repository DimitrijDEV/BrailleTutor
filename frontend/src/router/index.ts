import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from "@/components/Home.vue";
import Words from "@/components/Words.vue";
import Practice from "@/components/Practice.vue";
import Dictionary from "@/components/Dictionary.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/alphabet',
    name: 'Alphabet',
    component: Words
  },
  {
    path: '/numbers',
    name: 'Numbers',
    component: Words
  },
  {
    path: '/symbols',
    name: 'Symbols',
    component: Words
  },
  {
    path: '/words',
    name: 'Words',
    component: Words
  },
  {
    path: '/dictionary',
    name: 'Dictionary',
    component: Dictionary
  },
  {
    path: '/practice',
    name: 'Practice',
    component: Practice
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
