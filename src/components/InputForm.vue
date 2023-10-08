<template>
  <form class="flex my-5 justify-between" @submit.prevent="submitForm">
    <input
      class="p-3 border mr-4 rounded-lg w-full  border-gray-200"
      placeholder="what is in your mind..."
      type="text"
      v-model="text"
    />
    <AButton :btn-class="addBtn" type="submit" :text="textBtn">Add</AButton>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import AButton from "@/components/AButton.vue";

const emit = defineEmits(["adding"]);
const text = ref<string>("");

const submitForm = () => {
  emit("adding", text.value);
  text.value = "";
};

const addBtn = ref<string>("addBtn");
const textBtn = ref<string>("Add");
</script>

<style >
.addBtn {
  background-color: rgb(6, 74, 175);
  color: rgba(243, 243, 243, 0.89);
}
</style>
