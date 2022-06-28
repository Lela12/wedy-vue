<template>
  <div class="weather-main">
    <div class="weather-feelsLike">
      <b v-show="getWeatherMain.temp">{{ `${getWeatherMain.temp}°` }}</b>
    </div>
    <div class="weather-temp">
      <div class="weather-icon">
        <img :src="getWeatherMain.icon" alt="" />
      </div>
    </div>
    <div class="weather-description">{{ getWeatherMain.description }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getWeatherMain: "getWeatherMain",
    }),
  },
};
</script>

<!--<style lang="scss">-->
<!--.weather-main {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--  text-align: center;-->
<!--  margin-top: 40px;-->
<!--  margin-bottom: 40px;-->
<!--}-->
<!--</style>-->
