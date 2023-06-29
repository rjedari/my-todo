<template>
  <div class="flex border border-gray-100 p-2 justify-between">
    <div class="flex item center m-2">
      <input v-model="checkBtnState" @change="checking" type="checkbox" />

      <p :class="{ done: checkBtnState }" class="mx-2">{{ text }}</p>
    </div>

    <button @click="$emit('itemDelete')" class="bg-red-500 text-white p-2">
      Delete
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";

defineEmits("itemDelete");
const props = defineProps({
  text: String,
  status: Boolean,
  saveData: Function,
  getter: Function,
  list:Array
});
const checkBtnState = ref(props.status);

const count = ref(0);
function checking() {
  const item = props.list.find((item) => item.text === props.text);
  if (item) {
    item.status = checkBtnState.value;
    props.saveData();
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>