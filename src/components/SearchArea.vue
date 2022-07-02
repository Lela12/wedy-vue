<template>
  <div
    class="flex flex-col overflow-hidden bg-center bg-cover bg-main-bg place-items-center place-content-center h-[300px]"
  >
    <div />
    <div class="flex flex-col items-center w-full gap-16 px-10 font-bold">
      <header class="text-center">
        <span class="text-[28px] leading-4">Wedy</span>
      </header>
      <form
        class="flex justify-between w-full gap-2 px-6 border-2 border-lightgray rounded-full w-[320px] h-[40px]"
        @submit.prevent=""
      >
        <input
          id="main-search-bar"
          class="py-1 bg-transparent placeholder:text-gray-400 placeholder:opacity-90 text-[15px] w-full"
          type="text"
          v-model="location"
          @keydown.enter="getData"
        />
      </form>
      <span class="country" v-if="!isSearched">{{ getWeatherCity }}</span>
      <div class="error" v-else>
        해당하는 도시가 없습니다. 다시 입력해주세요!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { fetchWeatherData } from "@/api";
import { useStore } from "vuex";
import store from "@/store";

export default defineComponent({
  setup() {
    const store = useStore();
    const location = ref("Seoul");
    const isSearched = ref(false);
    const getWeatherCity = computed(() => store.getters["getWeatherCity"]);
    const getData = () => store.dispatch("fetchWeatherData", location.value);

    getData();

    return {
      location,
      getData,
      isSearched,
      getWeatherCity,
    };
  },
});
</script>
