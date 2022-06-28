<template>
  <div class="w-full h-[330px] shadow-lg p-3">
    <h3 class="m-2">
      {{ title }}
    </h3>
    <div class="border-[1px] border-black-200" />
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: "Fill title here",
    },
  },
};
</script>
