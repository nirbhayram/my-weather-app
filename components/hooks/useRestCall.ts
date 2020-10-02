import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { factory } from "../utils/Logger";
import { City, DailyWeather, HourlyWeather } from "../object/City";
import { API_KEY } from "../../secrets";

const log = factory.getLogger("userRestCall");

const printLogs = (city: City) => {
    log.info('city name' + city.name);
    log.info('city lat ' + city.lat);
    log.info('city lon ' + city.lon);
    log.info('city weather id ' + city.weather.id);
    log.info('city weather main ' + city.weather.main);
    log.info('city weather description ' + city.weather.description);
    log.info('city weather icon ' + city.weather.icon);
    log.info('city temperature ' + city.temperature);
    log.info('city temprature min ' + city.temperature_min);
    log.info('city temprature max ' + city.temperature_max);
    log.info('city presure ' + city.pressure);
    log.info('city humidity' + city.humidity);
    log.info('city sea level' + city.sea_level);
    log.info('city ground level' + city.grnd_level);
    log.info('city visibility ' + city.visibility);
    log.info('city wind speed ' + city.wind_speed);
    log.info('city wind degree ' + city.wind_degree);
    log.info('city hourly data time ' + city.hourlyData[0].time.toString());
    log.info('city hourly data temperature ' + city.hourlyData[0].temperature);
    log.info('city hourly data pressure ' + city.hourlyData[0].pressure);
    log.info('city hourly data humidity ' + city.hourlyData[0].humidity);
    log.info('city hourly data clouds ' + city.hourlyData[0].clouds);
    log.info('city hourly data visibility ' + city.hourlyData[0].visibility);
    log.info('city hourly data wind speed ' + city.hourlyData[0].wind_speed);
    log.info('city hourly data wind degree ' + city.hourlyData[0].wind_deg);
    log.info('city hourly data weather id ' + city.hourlyData[0].weather.id);
    log.info('city hourly data weather main ' + city.hourlyData[0].weather.main);
    log.info('city hourly data weather description ' + city.hourlyData[0].weather.description);
    log.info('city hourly data weather icon ' + city.hourlyData[0].weather.icon);
    log.info('city hourly data probability precepitation ' + city.hourlyData[0].probablity_precipitation);
    log.info('city hourly data rain ' + city.hourlyData[4].rain);
    log.info('city daily data date' + city.dailyData[0].date.toString());
    log.info('city daily data sunrise' + city.dailyData[0].sunrise.toString());
    log.info('city daily data sun set ' + city.dailyData[0].sunset.toString());
    log.info('city daily data temperature day ' + city.dailyData[0].temperature_day);
    log.info('city daily data temperature min ' + city.dailyData[0].temperature_min);
    log.info('city daily data temperature max ' + city.dailyData[0].temperature_max);
    log.info('city daily data temperature evening ' + city.dailyData[0].temperature_evening);
    log.info('city daily data temperature night ' + city.dailyData[0].temperature_night);
    log.info('city daily data temperarure morning ' + city.dailyData[0].temperature_morning);
    log.info('city daily data pressure ' + city.dailyData[0].pressure);
    log.info('city daily data humidity ' + city.dailyData[0].humidity);
    log.info('city daily data dew drops ' + city.dailyData[0].dew_drops);
    log.info('city daily data wind speed ' + city.dailyData[0].wind_speed);
    log.info('city daily data wind degree ' + city.dailyData[0].wind_deg);
    log.info('city daily data weather id ' + city.dailyData[0].weather.id);
    log.info('city daily data weather main ' + city.dailyData[0].weather.main);
    log.info('city daily data weather description ' + city.dailyData[0].weather.description);
    log.info('city daily data weather icon ' + city.dailyData[0].weather.icon);
    log.info('city daily data clouds ' + city.dailyData[0].clouds);
    log.info('city daily data probability of precipitation ' + city.dailyData[0].probablity_precipitation);
    log.info('city daily data rain ' + city.dailyData[0].rain);
    log.info('city daily data uvi ' + city.dailyData[0].uvi);
};

const useRestCall = (cityName: string): Promise<City> => {
    log.debug(`inside userRestCall`);
    return new Promise((execute, reject) => {
        let config: AxiosRequestConfig = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
            headers: {},
        };
        log.info(`getting value for ${cityName}`);
        axios(config)
            .then((response: AxiosResponse) => {
                let city: City = new City(response);
                getCityHourlyAndDailyReport(
                    response.data?.coord?.lat,
                    response.data?.coord?.lon,
                    city
                )
                    .then((param: string) => {
                        printLogs(city);
                        execute(city);
                    }
                    ).catch((error) => {
                        log.debug(`Caught an exception while calling rest api ${error}`);
                        reject(error);
                    })
            })
            .catch(error => {
                log.debug(`Caught an exception while calling rest api ${error}`);
                reject(error);
            });
    })
}

const getCityHourlyAndDailyReport = async (lat: number, lon: number, city: City): Promise<string> => {
    log.info(`inside getCityHourlyAndDailyReport`)
    return new Promise((resolve, reject) => {
        let config: AxiosRequestConfig = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current&appid=${API_KEY}&units=metric`,
            headers: {},
        };
        axios(config).then(response => {
            setHourlyAndDailyData(response.data, city);
            resolve('')
        }).catch(error => {
            log.debug(`Caught an exception while calling rest api ${error}`);
            reject(error)
        });
    })
};

const setHourlyAndDailyData = (data: any, city: City) => {
    data?.hourly.forEach((element: any) => {
        let temp_hourlyWeather: HourlyWeather = new HourlyWeather(element);
        city.addHourlyData = temp_hourlyWeather;
    });
    data?.daily.forEach((element: any) => {
        let temp_dailyWeather: DailyWeather = new DailyWeather(element);
        city.addDailyData = temp_dailyWeather;
    });
}

export default useRestCall;