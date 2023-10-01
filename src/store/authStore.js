import {ref, reactive} from 'vue';
import router from '../router/index';
import {defineStore} from 'pinia';


const authStore = defineStore('auth', () => {
    const isAuthenticated = ref(localStorage.getItem('isAuthenticated'));
    const warningText = ref('')
    const user = ref({
        email:'shovon58@yahoo.com',
        password:'123456',
    })

    const login = (email, password) => {
        if(JSON.parse(localStorage.getItem('user')) != null)
            user.value = JSON.parse(localStorage.getItem('user'));

        if(user.value.email == email && user.value.password == password){
            localStorage.setItem('isAuthenticated',true);
            isAuthenticated.value = true
            warningText.value = ''
            router.push('/todo')
        }
        else{
            warningText.value = 'Username or Password is incorrect';
        }
    }

    const register = (registerData) => {
        localStorage.setItem('user', JSON.stringify(registerData))
        user.value.email = ''
        user.value.password = ''
        router.push('/todo')      
    };

    const logout = () => {
        localStorage.setItem('isAuthenticated',false);
        isAuthenticated.value = false;
        localStorage.setItem('user', null);
        user.value.email = 'shovon58@yahoo.com';
        user.value.password = '123456';
        router.push('/login');
    };

    return {isAuthenticated, user, register, login, logout, warningText};
});

export default authStore;