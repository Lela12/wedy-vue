<template>
  <SearchArea />
  <WeatherInfo />
  <recommend-card-container />
  <RecommendColor />
</template>

<script lang="ts">
import SearchArea from "@/components/SearchArea.vue";
import recommendCardContainer from "@/components/RecommendCardContainer.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";
import RecommendColor from "@/components/RecommendColor.vue";

export default {
  components: {
    SearchArea,
    WeatherInfo,
    recommendCardContainer,
    RecommendColor,
  },
};
</script>
