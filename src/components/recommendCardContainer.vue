<template>
  <search-area />
  <section
    class="relative z-10 flex flex-col w-full gap-3 m-5 xl:-mt-5 xl:flex-row max-w-[1000px]"
  >
    <recommend-card title="오늘의 코디 추천"> </recommend-card>
  </section>
</template>

<script lang="ts">
import recommendCard from "@/components/recommendCard.vue";
export default {
  components: { recommendCard },
};
</script>
