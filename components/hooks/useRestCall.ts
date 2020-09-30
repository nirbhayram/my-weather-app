import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { City, DailyWeather, HourlyWeather } from "../pojo/City";

const printLogs = (city: City) => {
    console.log('city name' + city.name);
    console.log('city lat ' + city.lat);
    console.log('city lon ' + city.lon);
    console.log('city weather id ' + city.weather.id);
    console.log('city weather main ' + city.weather.main);
    console.log('city weather description ' + city.weather.description);
    console.log('city weather icon ' + city.weather.icon);
    console.log('city temperature ' + city.temperature);
    console.log('city temprature min ' + city.temperature_min);
    console.log('city temprature max ' + city.temperature_max);
    console.log('city presure ' + city.pressure);
    console.log('city humidity' + city.humidity);
    console.log('city sea level' + city.sea_level);
    console.log('city ground level' + city.grnd_level);
    console.log('city visibility ' + city.visibility);
    console.log('city wind speed ' + city.wind_speed);
    console.log('city wind degree ' + city.wind_degree);
    console.log('city hourly data time ' + city.hourlyData[0].time.toString());
    console.log('city hourly data temperature ' + city.hourlyData[0].temperature);
    console.log('city hourly data pressure ' + city.hourlyData[0].pressure);
    console.log('city hourly data humidity ' + city.hourlyData[0].humidity);
    console.log('city hourly data clouds ' + city.hourlyData[0].clouds);
    console.log('city hourly data visibility ' + city.hourlyData[0].visibility);
    console.log('city hourly data wind speed ' + city.hourlyData[0].wind_speed);
    console.log('city hourly data wind degree ' + city.hourlyData[0].wind_deg);
    console.log('city hourly data weather id ' + city.hourlyData[0].weather.id);
    console.log('city hourly data weather main ' + city.hourlyData[0].weather.main);
    console.log('city hourly data weather description ' + city.hourlyData[0].weather.description);
    console.log('city hourly data weather icon ' + city.hourlyData[0].weather.icon);
    console.log('city hourly data probability precepitation ' + city.hourlyData[0].probablity_precipitation);
    console.log('city hourly data rain ' + city.hourlyData[4].rain);
    console.log('city daily data date' + city.dailyData[0].date.toString());
    console.log('city daily data sunrise' + city.dailyData[0].sunrise.toString());
    console.log('city daily data sun set ' + city.dailyData[0].sunset.toString());
    console.log('city daily data temperature day ' + city.dailyData[0].temperature_day);
    console.log('city daily data temperature min ' + city.dailyData[0].temperature_min);
    console.log('city daily data temperature max ' + city.dailyData[0].temperature_max);
    console.log('city daily data temperature evening ' + city.dailyData[0].temperature_evening);
    console.log('city daily data temperature night ' + city.dailyData[0].temperature_night);
    console.log('city daily data temperarure morning ' + city.dailyData[0].temperature_morning);
    console.log('city daily data pressure ' + city.dailyData[0].pressure);
    console.log('city daily data humidity ' + city.dailyData[0].humidity);
    console.log('city daily data dew drops ' + city.dailyData[0].dew_drops);
    console.log('city daily data wind speed ' + city.dailyData[0].wind_speed);
    console.log('city daily data wind degree ' + city.dailyData[0].wind_deg);
    console.log('city daily data weather id ' + city.dailyData[0].weather.id);
    console.log('city daily data weather main ' + city.dailyData[0].weather.main);
    console.log('city daily data weather description ' + city.dailyData[0].weather.description);
    console.log('city daily data weather icon ' + city.dailyData[0].weather.icon);
    console.log('city daily data clouds ' + city.dailyData[0].clouds);
    console.log('city daily data probability of precipitation ' + city.dailyData[0].probablity_precipitation);
    console.log('city daily data rain ' + city.dailyData[0].rain);
    console.log('city daily data uvi ' + city.dailyData[0].uvi);
};

const useRestCall =  async (cityName: string, afterSuccessExecution: Function, afterFailedExecution:Function) => {
    let config: AxiosRequestConfig = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c1e64b484782aada5e07d493b0c358fb&units=metric`,
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
            printLogs(city);
            afterSuccessExecution(city)
        } catch (error) {
            afterFailedExecution(error);
        }
    } catch (error) {
        afterFailedExecution(error);
    }
}

const getCityHourlyAndDailyReport = async (lat: number, lon: number,city: City) => {
    let config: AxiosRequestConfig = {
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current&appid=c1e64b484782aada5e07d493b0c358fb&units=metric`,
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

export default useRestCall;