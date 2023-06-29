<template>
  <InputForm @adding="addItem" />{{ getter() }}
  <div v-for="({ text, status, id }, index) in list" :key="id">
    <TodoList
      @itemDelete="itemDelete(index)"
      :text="text"
      :status="status"
      :saveData="saveData"
      :getter="getter"
      :list="list"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import TodoList from "./components/TodoList.vue";
import InputForm from "./components/InputForm.vue";

const list = reactive([]);

function saveData() {
  localStorage.setItem("todoList", JSON.stringify(Array.from(list)));
}

function getter() {
  const savedData = localStorage.getItem("todoList");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    list.splice(0);
    parsedData.forEach((item) => {
      list.push(item);
    });
  }
}

const addItem = (text) => {
  list.unshift({ text, status: false, id: Math.random() });
  saveData();
};

const itemDelete = (index) => {
  list.splice(index, 1);
  saveData();
};
</script>

<style scoped></style>
