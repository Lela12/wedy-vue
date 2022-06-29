import { createStore } from "vuex";
import { fetchWeatherData } from "../api/index";
import axios from "axios";
import { newWeatherData } from "../types/api";
import theme from "tailwindcss/defaultTheme";

export default createStore({
  state: {
    //공통으로 사용할 변수 정의
    defaultSearch: "Seoul",
    location: "",
    isError: false,
    weatherData: {
      id: "",
      main: "",
      description: "",
      icon: "",
      temp: "",
      feelsLike: "",
      info: "",
      country: "",
      wind: "",
      clouds: "",
      humidity: "",
      name: "",
    },
  },

  getters: {
    //어떠한 값을 사용할지 정의
    getWeatherMain(state) {
      const { temp, feelsLike, description, icon, info } = state.weatherData;
      return {
        temp,
        feelsLike,
        description,
        info,
        icon,
      };
    },
    getWeatherInfo(state) {
      const { wind, clouds, humidity } = state.weatherData;
      return {
        wind,
        clouds,
        humidity,
      };
    },
    getDefaultValue(state) {
      return state.defaultSearch;
    },
    getWeatherCity(state) {
      return state.weatherData.name ?? "seoul";
    },
    isSearched(state) {
      return state.location !== "";
    },
    getError(state) {
      return state.isError;
    },
  },

  mutations: {
    //mutation을 이용해 state 변경(정의된 값은 commit를 통해 호출한다.)
    ["SET_SEARCH"](state, location) {
      state.location = location.toLowerCase();
    },
    ["SET_WEATHER_DATA"](state, data) {
      state.weatherData = data;
    },
    ["SET_ERROR"](state, value) {
      state.isError = value;
    },
  },

  actions: {
    //비동기 함수 실행
    async fetchWeatherData({ commit }, location) {
      try {
        const { data } = await fetchWeatherData(location);
        const WeatherData = {
          name: data.name as string,
          temp: data.main.temp as number,
          tempMin: data.main.temp_min as number,
          tempMax: data.main.temp_max as number,
          feelsLike: data.main.feels_like as number,
          description: data.weather[0].description as string,
          icon: `https://openweathermap.org/img/w/${
            data.weather[0].icon as string
          }.png`,
          info: data.weather[0].main as string,
          wind: data.wind.speed as number,
          humidity: data.main.humidity as number,
          clouds: data.clouds.all as number,
          country: data.sys.country as string,
        };
        commit("SET_WEATHER_DATA", WeatherData);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
