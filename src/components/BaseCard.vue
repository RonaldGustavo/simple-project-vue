<template>
  <div class="card">
    <p class="email-text">📧 Email: <span class="email-value">{{ user }}</span></p>

    <div class="input-group">
      <input v-model="emailInput" type="email" placeholder="Update Email" />
      <button @click="handleUpdate" class="update">Update Email</button>
      <button @click="props.handleLogout" class="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const emailInput = ref('')
const props = defineProps({
  user: String,
  handleLogout: Function,
});

watch(() => props.user, (newVal) => {
  emailInput.value = newVal;
});

const handleUpdate = () => {
  store.dispatch('user/fetchUser', emailInput.value);
};
</script>

<style scoped>
.card {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
}

.email-text {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #555;
  overflow: hidden;
  word-wrap: break-word;
}

.email-value {
  color: red;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 16px;
  box-sizing: border-box;
}

.input-group button {
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.input-group .update {
  background: #3498db;
}

.input-group .update:hover {
  background: #2980b9;
}

.input-group .logout {
  background: red;
}

.input-group .logout:hover {
  background: darkred;
}

</style>