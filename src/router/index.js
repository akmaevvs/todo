import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Register from '../views/Register.vue'
// import Login from '../views/Login.vue'
// import Secret from '../views/Secret.vue'

// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: Login
  // },
  // {
  //   path: '/register',
  //   name: 'register',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: Register
  // },
  // {
  //   path: '/secret',
  //   name: 'secret',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: Secret,
  //   meta: { requiresAuth: true }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   const isAuthentificated = firebase.auth().currentUser

//   if (requiresAuth & !isAuthentificated) {
//     next("/login");
//   } else {
//     next();
//   }
// })

export default router
