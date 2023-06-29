<template>
    <form @submit.prevent="submitForm">
      <input
        class="p-3 border rounded-lg border-gray-200"
        placeholder="what is in your mind..."
        type="text"
        v-model="text"
      />
      <button class="m-5 border border-gray-200" type="submit">Add</button>
    </form>
  </template>
  
  <script setup>
  import { ref, getCurrentInstance } from "vue";
  
  const text = ref("");
  const instance = getCurrentInstance();
  
  const submitForm = () => {
    instance.emit('adding', text.value);
    text.value = ''; 
  };
  </script>
  
  <style></style>
  