import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import SeLect from '../views/Pust_Pro.vue'
import ManageMent from '../views/ManageMent.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/select',
    name: 'SeLect',
    component: SeLect
  },
  {
    path: '/management',
    name: 'ManageMent',
    component: ManageMent
  },
  {
    path: '/management/fix',
    name: 'ManageMentFix',
    component: () => import("@/views/CRUDFix.vue")
  },
  {
    path: '/management/add',
    name: 'ManageMentAdd',
    component: () => import("@/views/CURDAdd.vue")
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
