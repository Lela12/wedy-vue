<template>
  <div class="clothes-main">
    <div class="clothes-description">
      <div class="recommend">
        <span v-if="getWeatherMain.temp >= 4 && getWeatherMain.temp < 9"
          >코트, 가죽자켓, 히트텍, 니트, 레깅스</span
        >
        <span v-else-if="getWeatherMain.temp >= 9 && getWeatherMain.temp < 12"
          >자켓, 트렌치 코트, 니트, 청바지, 스타킹</span
        >
        <span v-else-if="getWeatherMain.temp >= 12 && getWeatherMain.temp < 17"
          >자켓, 가디건, 야상, 스타킹, 청바지, 면바지</span
        >
        <span v-else-if="getWeatherMain.temp >= 17 && getWeatherMain.temp < 20"
          >얇은 니트, 맨투맨, 가디건, 청바지</span
        >
        <span v-else-if="getWeatherMain.temp >= 20 && getWeatherMain.temp < 23"
          >얇은 가디건, 긴팔, 면바지, 청바지</span
        >
        <span v-else-if="getWeatherMain.temp >= 23 && getWeatherMain.temp < 28"
          >반팔, 얇은 셔츠, 반바지, 면바지</span
        >
        <span v-else-if="getWeatherMain.temp >= 28"
          >민소매, 반바지, 원피스</span
        >
        <span v-else>패딩, 두꺼운 코트, 목도리, 기모제품</span>
      </div>
    </div>
  </div>
</template>
<!--colorpicker-->
<script lang="ts">
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

<style lang="scss">
.clothes-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: auto;
}
</style>
