<template>
  <InputForm @adding="addItem" />
  <div v-for="({ text, status, id }, index) in list" :key="id">
    <TodoList
      @itemDelete="itemDelete(index)"
      :text="text"
      :status="status"
      :saveData="saveData"
      :getter="getter"
      :list="list"
      :id="id"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import TodoList from "@/components/TodoList.vue";
import InputForm from "@/components/InputForm.vue";
import {TItem} from "./types"


const list:Array<TItem> = reactive([]);

function saveData():void {
  localStorage.setItem("todoList", JSON.stringify(Array.from(list)));
}

function getter():void {
  const savedData = localStorage.getItem("todoList");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    list.splice(0);
    parsedData.forEach((item:TItem) => {
      list.push(item);
    });
  }
}
getter()
let id:number = 1
const addItem = (text:string) :void=> {
  list.unshift({ text, status: false, id:id++ });
  saveData();
};

const itemDelete = (index: number) => {
  list.splice(index, 1);
  saveData();
};
</script>

<style scoped></style>
