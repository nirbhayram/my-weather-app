import { AxiosResponse } from "axios";
import { action, computed, observable } from "mobx";

export class City {
    @observable name: string;
    @observable lat: number;
    @observable lon: number;
    @observable weather: Weather;
    @observable temperature: number;
    @observable temperature_min: number;
    @observable temperature_max: number;
    @observable pressure: number;
    @observable humidity: number;
    @observable sea_level: number;
    @observable grnd_level: number;
    @observable visibility: number;
    @observable wind_speed: number;
    @observable wind_degree: number;
    @observable hourlyData: Array<HourlyWeather>;
    @observable dailyData: Array<DailyWeather>;
    @observable temp_current_time: Date;
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
        this.hourlyData = new Array<HourlyWeather>();
        this.dailyData = new Array<DailyWeather>();
        this.temp_current_time = new Date();
        this.startRolling();
    }

    startRolling(){
        setTimeout(() => {
            this.setTime();
            this.startRolling();
        }, 1000);
    }

    setTime(){
        this.temp_current_time = new Date();
    }

    public set addHourlyData(newHourlyData: HourlyWeather) {
        this.hourlyData.push(newHourlyData);
    }


    public set addDailyData(v: DailyWeather) {
        this.dailyData.push(v);
    }


    public get temperatureValue(): string {
        return `current tmeperature is ${this.temperature} max and min are ${this.temperature_max} ${this.temperature_min} respectively`
    }

}

export class DailyWeather {
    @observable date: Date;
    @observable sunrise: Date;
    @observable sunset: Date;
    @observable temperature_day: number;
    @observable temperature_min: number;
    @observable temperature_max: number;
    @observable temperature_evening: number;
    @observable temperature_night: number;
    @observable temperature_morning: number;
    @observable pressure: number;
    @observable humidity: number;
    @observable dew_drops: number;
    @observable wind_speed: number;
    @observable wind_deg: number;
    @observable weather: Weather;
    @observable clouds: number;
    @observable probablity_precipitation: number;
    @observable rain: number;
    @observable uvi: number;
    constructor(data: any) {
        this.date = new Date(data?.dt * 1000);
        this.sunrise = new Date(data?.sunrise * 1000)
        this.sunset = new Date(data?.sunset * 1000);
        this.temperature_day = data?.temp?.day;
        this.temperature_min = data?.temp?.min;
        this.temperature_max = data?.temp?.max;
        this.temperature_night = data?.temp?.night;
        this.temperature_evening = data?.temp?.eve;
        this.temperature_morning = data?.temp?.morn;
        this.pressure = data?.pressure;
        this.humidity = data?.humidity;
        this.dew_drops = data?.dew_point;
        this.wind_speed = data?.wind_speed;
        this.wind_deg = data?.wind_deg;
        this.weather = new Weather(
            data?.weather?.[0]?.id,
            data?.weather?.[0]?.main,
            data?.weather?.[0]?.description,
            data?.weather?.[0]?.icon
        );
        this.clouds = data?.clouds;
        this.probablity_precipitation = data?.pop;
        this.rain = data?.rain;
        this.uvi = data?.uvi;
    }
}

export class HourlyWeather {
    @observable time: Date;
    @observable temperature: number;
    @observable pressure: number;
    @observable humidity: number;
    @observable clouds: number;
    @observable visibility: number;
    @observable wind_speed: number;
    @observable wind_deg: number;
    @observable weather: Weather;
    @observable probablity_precipitation: number;
    @observable rain: number;
    constructor(response: any) {
        this.time = new Date(response?.dt * 1000);
        this.temperature = response?.temp;
        this.pressure = response?.pressure;
        this.humidity = response?.humidity;
        this.clouds = response?.clouds;
        this.visibility = response?.visibility;
        this.wind_speed = response?.wind_speed;
        this.wind_deg = response?.wind_deg;
        this.weather = new Weather(
            response?.weather?.[0]?.id,
            response?.weather?.[0]?.main,
            response?.weather?.[0]?.description,
            response?.weather?.[0]?.icon
        );
        this.probablity_precipitation = response?.pop;
        this.rain = response?.rain?.["1h"];
    }
}

export class Weather {
    @observable id: number;
    @observable main: string;
    @observable description: string;
    @observable icon: string;
    constructor(id: number, main: string, description: string, icon: string) {
        this.id = id;
        this.main = main;
        this.description = description;
        this.icon = icon;
    }

    public get getcurrentWeather(): string {
        return `main: ${this.main} description: ${this.description}`
    }

}
