<template>
  <img src="../assets/logo_restaurant.jpeg" class="logo" />
  <h1>Sign In</h1>
  <div class="login">
    <input v-model="email" type="email" placeholder="Enter Email" />
    <input v-model="password" type="password" placeholder="Enter Password" />
    <button v-on:click="handleLogin">Sign In</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const email = ref('');
const password = ref('');

const router = useRouter()

const handleLogin = () => {
  const passwordTemp = (password.value = 'newpassword');
  console.log('Login', email.value);
  console.log('password', passwordTemp);
  router.push('/home')
};
</script>

<style>
.logo {
  width: 100px;
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
}
</style>
