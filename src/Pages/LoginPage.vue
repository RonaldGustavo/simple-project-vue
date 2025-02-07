<template>
    <div class="container">
        <div class="container-wrapper">
            <img src="../assets/logo.png" class="logo" />
            <h1>Sign In</h1>
            <div class="login">
                <input v-model="email" type="email" placeholder="Enter Email" />
                <input v-model="password" type="password" placeholder="Enter Password"/>
                <button v-on:click="handleLogin">Sign In</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


const email = ref('');
const password = ref('');

const router = useRouter()
const store = useStore();


const handleLogin = () => {
    store.dispatch('user/fetchUser', email.value);
    if ('admin' === email.value && 'admin' === password.value) {
        Swal.fire({
            title: "Success",
            text: "Successfully Login",
            icon: "success"

        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('token', email.value)
                router.push('/home')
            } else {
                return
            }
        })
    } else {
        Swal.fire({
            icon: "error",
            title: "Invalid login",
            text: "Something went wrong!",
        });
    }
};
</script>

<style scoped>
.logo {
    width: 100px;
}

.container-wrapper {
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 350px;
    transition: transform 0.3s ease-in-out;
}

.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.login button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
    border-radius: 10px;
}
</style>
