<script setup>
import {ref, reactive} from 'vue'
import { RouterLink } from 'vue-router';
import authStore from '../store/authStore';
const auth = authStore();

const matchConfirmPassword = ref(true)
const registerData = reactive({
    name: '',
    email: '',
    password: '',
    confirmpassword:'',
})

const registration = () => {
    if( registerData.password !== registerData.confirmpassword ){
        matchConfirmPassword.value = false
        return 
    }
    matchConfirmPassword.value = true
    auth.register(registerData)
}
</script>

<template>
    <div class="login-registration-area">
        <div class="container">
            <div class="wrapper">
                <div class="title"><span>Registration Form</span></div>
                <p v-if="!matchConfirmPassword" class="login-registration-warning">Confirm password doesn't match with the password</p>
                <form @submit.prevent="registration()" action="#">
                    <div class="row">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Name" v-model="registerData.name" required>
                    </div>
                    <div class="row">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" v-model="registerData.email" required>
                    </div>
                    <div class="row">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" v-model="registerData.password" required>
                    </div>
                    <div class="row">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Confirm Password" v-model="registerData.confirmpassword" required>
                    </div>
                    <div class="row button">
                        <input type="submit" value="Register">
                    </div>
                    <div class="signup-link">Alerady Registered? <router-link to="/login" class="text-blue-600 font-bold">Sign in</router-link></div>
                </form>
            </div>
        </div>
    </div>
</template>