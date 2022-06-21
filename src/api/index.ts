import axios from "axios";

const config = {
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

const API_KEY = process.env.VUE_APP_OPEN_API_KEY;
function fetchSearchData() {
  return axios.get(
    `${config.baseUrl}weather?q=Seoul,kr&units=metric&APPID=${API_KEY}`
  );
}

export { fetchSearchData };
