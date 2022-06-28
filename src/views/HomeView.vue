<template>
  <search-area />
  <WeatherInfo />
  <recommend-card-container />
</template>

<script lang="ts">
import SearchArea from "@/components/SearchArea.vue";
import recommendCardContainer from "@/components/RecommendCardContainer.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";

export default {
  components: {
    SearchArea,
    WeatherInfo,
    recommendCardContainer,
  },
};
</script>
