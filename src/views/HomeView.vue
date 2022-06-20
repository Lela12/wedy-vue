<template>
  <search-area />
  <recommend-card-container />
</template>

<script lang="ts">
import SearchArea from "@/components/SearchArea.vue";
import recommendCardContainer from "@/components/recommendCardContainer.vue";

export default {
  components: { SearchArea, recommendCardContainer },
};
</script>
