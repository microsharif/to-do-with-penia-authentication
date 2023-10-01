<script setup>
import {ref, reactive} from 'vue'
import { RouterLink } from 'vue-router';
import authStore from '../store/authStore';

const auth = authStore();

const loginData = reactive({
    email: 'shovon58@yahoo.com',
    password: '123456'
})

</script>

<template>
    <div class="login-registration-area">
        <div class="container">
            <div class="wrapper">
                <div class="title"><span>Login Form</span></div>
                <p v-if="auth.warningText" class="login-registration-warning">{{ auth.warningText }}</p>
                <form @submit.prevent="auth.login(loginData.email, loginData.password)">
                    <div class="row">
                        <i class="fas fa-envelope"></i>
                        <input type="text" placeholder="Email" v-model="loginData.email" required>
                    </div>
                    <div class="row">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" v-model="loginData.password" required>
                    </div>
                    <div class="pass"><a href="#">Please login first to use the Todo App</a></div>
                    <div class="row button">
                        <input type="submit" value="Login">
                    </div>
                    <div class="signup-link">Not register? <router-link to="/register">Register now</router-link></div>
                </form>
            </div>
        </div>
    </div>
</template>