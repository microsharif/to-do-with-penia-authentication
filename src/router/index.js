import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Registration from '../views/Register.vue'
import Todo from '../views/Todo.vue'

import authStore from '../store/authStore';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Todo,
        meta:{
            requiresAuth:true,
        }
      },
      {
        path: '/todo',
        name: 'todo',
        component: Todo,
        meta:{
            requiresAuth:true,
        }
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Registration
      }
    ]
  })

  router.beforeEach((to, from, next) => {
    const auth = authStore();
    
    if(to.meta.requiresAuth && auth.isAuthenticated != true){
      next('/login');
    }else{
      next();
    }
  });
  
  export default router