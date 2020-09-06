import { AxiosResponse } from "axios";
import { Weather } from "./Weather";

export class City {
    name: string;
    lat: number;
    lon: number;
    weather: Weather;
    temperature: number;
    temperature_min: number;
    temperature_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
    visibility: number;
    wind_speed: number;
    wind_degree: number;

    constructor(repsonse: AxiosResponse) {
        this.lat = repsonse?.data?.coord?.lat;
        this.lon = repsonse?.data?.coord?.lon;
        this.weather = new Weather(
            repsonse?.data?.weather[0]?.id,
            repsonse?.data?.weather[0]?.main,
            repsonse?.data?.weather[0]?.description,
            repsonse?.data?.weather[0]?.icon
        );
        this.name = repsonse?.data?.name;
        this.temperature = repsonse?.data?.main?.temp;
        this.temperature_min = repsonse?.data?.main?.temp_min;
        this.temperature_max = repsonse?.data?.main?.temp_max;
        this.pressure = repsonse?.data?.main?.pressure;
        this.humidity = repsonse?.data?.main?.humidity;
        this.sea_level = repsonse?.data?.main?.sea_level;
        this.grnd_level = repsonse?.data?.main?.grnd_level;
        this.visibility = repsonse?.data?.visibility;
        this.wind_speed = repsonse?.data?.wind?.speed;
        this.wind_degree = repsonse?.data?.wind?.deg;
    }

    public get temperatureValue() : string {
        return `current tmeperature is ${this.temperature} max and min are ${this.temperature_max} ${this.temperature_min} respectively`
    }
    
}
