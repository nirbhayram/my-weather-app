import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { API_KEY } from "../../secrets";
import {City, DailyWeather, HourlyWeather} from "../pojo/City";

export const getCityAtmosphereDetails = async (
    cityName: string,
    onSuccess: Function,
    onError: Function
) => {
    let config: AxiosRequestConfig = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
        headers: {},
    };

    console.log(`getting value for ${cityName}`);

    try {
        let response: AxiosResponse = await axios(config);
        let city: City = new City(response);
        try {
            let res: any = await getCityHourlyAndDailyReport(
                response.data?.coord?.lat,
                response.data?.coord?.lon,
                city
            );
            onSuccess(city);
        } catch (error) {
            onError(error);
        }
    } catch (error) {
        onError(error);
    }
};

const getCityHourlyAndDailyReport = async (lat: number, lon: number,city: City) => {
    let config: AxiosRequestConfig = {
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current&appid=${API_KEY}&units=metric`,
        headers: {},
    };
    let response =  await axios(config);
    setHourlyAndDailyData(response.data,city);
    return response;
};

const setHourlyAndDailyData = (data:any ,city : City) => {
    data?.hourly.forEach( (element:any) => {
        let temp_hourlyWeather: HourlyWeather = new HourlyWeather(element);
        city.addHourlyData = temp_hourlyWeather;
    });
    data?.daily.forEach( (element:any) => {
        let temp_dailyWeather: DailyWeather = new DailyWeather(element);
        city.addDailyData = temp_dailyWeather;
    });
}
