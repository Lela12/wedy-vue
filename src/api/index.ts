import axios from "axios";
// import { newWeatherData } from "@/types/api";

const config = {
  baseUrl: "https://api.openweathermap.org",
};

const API_KEY = process.env.VUE_APP_OPEN_API_KEY;

async function fetchWeatherData(location) {
  return await axios.get(
    `${config.baseUrl}/data/2.5/weather?q=${location}&units=metric&APPID=${API_KEY}`
  );
}

export { fetchWeatherData };
