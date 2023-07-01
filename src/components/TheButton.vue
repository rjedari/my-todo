<template>
  <div>
    <button  :class="props.btn">
      {{ props.text }}
    </button>
  </div>
</template>

<script setup>
// defineEmits(["greenItemDelete"])
import { defineProps } from 'vue'

const props = defineProps({btn:String,text:String})

</script>

<style>

</style>