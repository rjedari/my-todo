<template>
  <div class="flex border border-gray-100 p-2 justify-between">
    <div class="flex item center m-2">
      <input v-model="checkBtnState" @change="checking" type="checkbox" />

      <p :class="{ done: checkBtnState }" class="mx-2">{{ text }}</p>
    </div>
<TheButton  @click="$emit('itemDelete')" :btn="active" :text="textBtn" />
  
  </div>
</template>
<script setup>
import { ref } from "vue";
import TheButton from "./TheButton.vue"

defineEmits("itemDelete");
const props = defineProps({
  text: String,
  status: Boolean,
  saveData: Function,
  getter: Function,
  list:Array,
  id:Number
});
const checkBtnState = ref(props.status);
const input = ref("")
function checking() {
  const item = props.list.find((item) => item.id === props.id);
  if (item) {
    item.status = checkBtnState.value;
    props.saveData();
  }
}

const active = ref('deleteBtn')
const textBtn=ref("Delete")

</script>

<style>
.done {
  text-decoration: line-through;
}
.deleteBtn{
  background-color: red;
  color: white;
  padding: 3px;
}
.active{
  background-color: red;
}
.undoBtn{
  background-color: rgb(255, 230, 2);
  color: rgb(75, 74, 74);
  padding: 3px;
}
</style>