export const WEATHER_SUCCESS = "WEATHER_SUCCESS";
export const WEATHER_FAIL = "WEATHER_FAIL";
export const WEATHER_LOADING = "WEATHER_LOADING";

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherState {
  loading: boolean;
  data: WeatherData | null;
}

export interface WeatherLoading {
  type: typeof WEATHER_LOADING;
}

export interface WeatherSuccess {
  type: typeof WEATHER_SUCESS;
  payload: WeatherData;
}

export type WeatherDispatchType = WeatherLoading | WeatherSuccess;
