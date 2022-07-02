<template>
  <div class="weather-main">
    <div class="weather-feelsLike">
      <b>{{ getWeatherMain.temp }}°</b>
    </div>
    <div class="weather-temp">
      <div class="weather-icon">
        <img :src="getWeatherMain.icon" alt="" />
      </div>
    </div>
    <div class="weather-description">{{ getWeatherMain.description }}</div>
  </div>
</template>
<!--define-->
<script lang="ts">
import { computed, defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getWeatherMain: "getWeatherMain",
    }),
  },
  // setup() {
  //   const store = useStore();
  //   const getWeatherMain = computed(() => store.getters["getWeatherMain"]);
  //
  //   return {
  //     getWeatherMain,
  //   };
  // },
  mounted() {
    this.getWeatherMain();
  },
});
</script>

<style lang="scss">
.weather-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
