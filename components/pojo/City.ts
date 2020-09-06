import { AxiosResponse } from "axios";

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
    hourlyData: Array<HourlyWeather>;
    dailyData: Array<DailyWeather>;
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
    }

    public set addHourlyData(newHourlyData  : HourlyWeather) {
        this.hourlyData.push(newHourlyData);
    }

    
    public set addDailyData(v : DailyWeather) {
        this.dailyData.push(v);
    }
    
    
    public get temperatureValue() : string {
        return `current tmeperature is ${this.temperature} max and min are ${this.temperature_max} ${this.temperature_min} respectively`
    }

}

export class DailyWeather {
    date: Date;
    sunrise: Date;
    sunset: Date;
    temperature_day: number;
    temperature_min: number;
    temperature_max: number;
    temperature_evening: number;
    temperature_night: number;
    temperature_morning: number;
    pressure: number;
    humidity: number;
    dew_drops: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather;
    clouds: number;
    probablity_precipitation: number;
    rain: number;
    uvi: number;
    constructor(data: any) {
        this.date = new Date(data?.dt);
        this.sunrise = new Date(data?.sunrise)
        this.sunset = new Date(data?.sunset);
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
    time: Date;
    temperature: number;
    pressure: number;
    humidity: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather;
    probablity_precipitation: number;
    rain: number;
    constructor(response: any) {
        this.time = new Date(response?.dt);
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
    id: number;
    main: string;
    description: string;
    icon: string;
    constructor(id:number, main:string, description:string,icon:string){
        this.id = id;
        this.main = main;
        this.description = description;
        this.icon = icon;
    }
    
    public get currentWeather() : string {
        return `main: ${this.main} description: ${this.description}`
    }
    
}
