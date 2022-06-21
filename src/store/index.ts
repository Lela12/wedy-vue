import { createStore } from "vuex";
import { ActionTypes } from "@/store/types";
import { fetchSearchData } from "../api/index";
import axios from "axios";
const API_KEY = process.env.VUE_APP_OPEN_API_KEY;

export default createStore({
  state: {
    weather: [],
  },
  getters: {},
  mutations: {
    SET_WEATHER(state, weather) {
      //response.data -> weather
      state.weather = weather;
    },
  },
  actions: {
    FETCH_WEATHER(context) {
      fetchSearchData()
        .then((response) => {
          console.log(response.data);
          context.commit("SET_WEATHER", response.data);
          //mutation SET_WEATHER 실행
          //commit을 통해 mutation의 값을 넘기고 있다.
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
