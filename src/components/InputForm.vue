<template>
  <form  class="flex my-5 justify-between" @submit.prevent="submitForm">
    <input
      class="p-3 border mr-4 rounded-lg w-full  border-gray-200"
      placeholder="what is in your mind..."
      type="text"
      v-model="text"
    />
    <TheButton  :btn="addBtn" type="submit" :text="textBtn"/>

    <!-- <button class="m-5 border border-gray-200" >Add</button> -->
  </form>
</template>

<script setup>
import { ref,  } from "vue";
import TheButton from "./TheButton.vue";
const emit = defineEmits(["adding"])
const text = ref("");

const submitForm = () => {

  emit('adding', text.value);
  text.value = "";
};
const addBtn =ref("addBtn")
const textBtn=ref("Add")

</script>

<style scoped>
.addBtn{
  background-color: rgb(170, 170, 170);
  color: black;
}
</style>
