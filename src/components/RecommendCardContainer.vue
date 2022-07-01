<template>
  <search-area />
  <section class="flex flex-col w-auto gap-3 m-5 xl:-mt-5 xl:flex-row">
    <recommend-card :title="title">
      <ClothesRecommend />
    </recommend-card>
  </section>
</template>

<script lang="ts">
import recommendCard from "@/components/RecommendCard.vue";
import ClothesRecommend from "@/components/ClothesRecommend.vue";
export default {
  components: { ClothesRecommend, recommendCard },
  data() {
    return {
      title: "오늘의 날씨 추천",
    };
  },
};
</script>
