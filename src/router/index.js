import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IfElseView from '../views/IfElseView.vue'
import ShowView from '../views/ShowView.vue'
import ForView from '../views/ForView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/if-else', name: 'if-else', component: IfElseView },
    { path: '/show', name: 'show', component: ShowView },
    { path: '/for', name: 'for', component: ForView }
  ]
})

export default router
