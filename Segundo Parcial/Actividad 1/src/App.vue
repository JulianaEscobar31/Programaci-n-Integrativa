<template>
  <div>
    <h1 class="title">{{ msg }}</h1>
    <input v-model="msg" class="input" /> <br><br>
    <button @click="resetMessage" class="button">Restablecer</button> <br>
    <button @click="uppercaseMessage" class="button">Mayúsculas</button> <br>
    <button @click="lowercaseMessage" class="button">Minúsculas</button><br>
    <button @click="reverseMessage" class="button">Reverso</button> <br>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref('¡Hola, escribe un texto!')

const resetMessage = () => {
  msg.value = '¡Hola, escribe un texto!';
};

const uppercaseMessage = () => {
  msg.value = msg.value.toUpperCase();
};

const lowercaseMessage = () => {
  msg.value = msg.value.toLowerCase();
};

const reverseMessage = () => {
  msg.value = msg.value.split('').reverse().join('');
};
</script>

<style>
.title {
  color: #900C3F;
  font-size: 24px;
  margin-bottom: 16px;
}

.input {
  padding: 8px;
  margin-bottom: 16px;
}

.button {
  padding: 8px 16px;
  margin-bottom: 8px;
  background-color: #900C3F;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.button:hover {
  background-color: #702736;
}
</style>
