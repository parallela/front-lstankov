import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Projects from './views/Projects'
import LatestArticles from "./views/LatestArticles";
import Read from "./views/Read";
import Category from "./views/Category";
import Search from "./views/Search";
import NotFound from './views/NotFound';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/:slug',
      name: 'category',
      component: Category,
    },
    {
      path: '/about-me',
      name: 'aboutme',
      component: About,
    },
    {
      path: '/my-projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/article/:slug&previous_url=:purl',
      name: 'article',
      component: Read
    },
    {
      path: '/latest',
      name: 'latest',
      component: LatestArticles,
    },
    {
      path: '/search/:query',
      name: 'search',
      component: Search
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
