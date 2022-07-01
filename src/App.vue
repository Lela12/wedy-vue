<template>
  <SearchArea />
  <WeatherInfo />
  <RecommendCardContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchArea from "@/components/SearchArea.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";
import RecommendCardContainer from "@/components/RecommendCardContainer.vue";

export default defineComponent({
  name: "App",
  components: {
    SearchArea,
    WeatherInfo,
    RecommendCardContainer,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
