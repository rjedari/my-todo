<template>
  <div>
    <button :class="props.btn">
      Delete
    </button>
  </div>
</template>

<script setup>
// defineEmits(["greenItemDelete"])
import { defineProps } from 'vue'

const props = defineProps({btn:String})

</script>

<style>

</style>