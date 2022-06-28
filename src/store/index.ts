import { createStore } from "vuex";
import { fetchWeatherData } from "../api/index";
import axios from "axios";
import theme from "tailwindcss/defaultTheme";

export default createStore({
  state: {
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
    ["SET_SEARCH"](state, location) {
      state.location = location.toLowerCase();
    },
    ["SET_WEATHER_DATA"](state, data) {
      console.log("SET_WEATHER_DATA", data);
      state.weatherData = data;
    },
    ["SET_ERROR"](state, value) {
      state.isError = value;
    },
  },

  actions: {
    async fetchWeatherData({ commit }, location) {
      console.log("fetch");
      const { data } = await fetchWeatherData(location);
      const newWeatherData = {
        name: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        info: data.weather[0].main,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        clouds: data.clouds.all,
        country: data.sys.country,
      };
      commit("SET_WEATHER_DATA", newWeatherData);
    },
  },
});
