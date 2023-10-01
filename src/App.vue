<script setup>
import { RouterLink, RouterView } from 'vue-router';
import authStore from './store/authStore';
const auth = authStore();
</script>
<template>
  <div class="todo-navigation" :class="auth.isAuthenticated ? 'logut' : ''">
    <ul v-if="!auth.isAuthenticated">
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/todo">Todo</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
    </ul>
    <ul v-else>
      <li><a @click.prevent="auth.logout()" href="#" >Log out</a></li>
    </ul>
  </div>
  <RouterView />
</template>

<style scoped>
  
</style>
