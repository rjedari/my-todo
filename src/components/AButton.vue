<template>
  <button :class="btnClass">
    <slot />
  </button>
</template>

<script setup lang="ts">

interface IProps {
  btnClass?:String
}

defineProps<IProps>()

</script>
