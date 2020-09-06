import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import {City} from "../pojo/City";

export const getCityAtmosphereDetails = async (
    cityName: string,
    onSuccess: Function,
    onError: Function
) => {
    let config: AxiosRequestConfig = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c1e64b484782aada5e07d493b0c358fb&units=metric`,
        headers: {},
    };
    console.log(`getting value for ${cityName}`);
    try {
        let response: AxiosResponse = await axios(config);
        let city: City = new City(response);
        console.log(city.weather.currentWeather)
        try {
            let res: any = await getCityHourlyAndDailyReport(
                response.data?.coord?.lat,
                response.data?.coord?.lon
            );
            onSuccess(response);
        } catch (error) {
            onError(error);
        }
    } catch (error) {
        onError(error);
    }
};

const getCityHourlyAndDailyReport = async (lat: number, lon: number) => {
    let config: AxiosRequestConfig = {
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current&appid=c1e64b484782aada5e07d493b0c358fb&units=metric`,
        headers: {},
    };
    return await axios(config);
};
