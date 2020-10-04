import { action, computed, observable } from "mobx";
import { UseQueryState } from "urql";
import { factory } from "../../components/utils/Logger";

const log = factory.getLogger("City store");

class Cities {

    @observable
    cities: Map<string, CityMapValue>;

    @observable
    currentCityName: string;

    @observable
    response: UseQueryState<any> | undefined

    @computed
    get fetching() { return (store?.response?.fetching || store?.response?.error ? true : false) }

    @computed
    get city(): City {
        return (store?.response?.data?.getCityByName)
    }

    constructor() {
        this.cities = new Map<string, CityMapValue>();
        this.currentCityName = "";
    }

    @action
    public setCurrentCityName(cityName: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (this.cities.has(cityName)) {
                this.currentCityName = cityName;
                log.debug(`city name ${cityName}`)
                resolve(true);
            } else {
                log.debug(`city name ${cityName} not found.`)
                reject();
            }
        })
    }

    @action
    addCity(icon: string, cityName: string) {
        cityName = cityName.toUpperCase();
        const cityStoreObject: CityMapValue = {
            icon:icon,
            cityName:cityName
        };
        this.cities.set(cityName, cityStoreObject);
    }

}

interface CityMapValue {
    icon: string
    cityName: string
}
interface Current {
    temperature: number
    icon: string
    main: string
    sunrise: number
    sunset: number
    pop: number
    uv: number
    dewDrops: number
    windSpeed: number
    humidity: number
}

interface DailyData {
    date: number
    icon: string
    minTemperature: number
    maxTemperature: number
}

interface HourData {
    time: number
    icon: string
    temperature: number
}
interface City {
    name: string
    dt: number
    current: Current
    hourData: HourData[]
    dailyData: DailyData[]
}

const store: Cities = new Cities();

export default store;
