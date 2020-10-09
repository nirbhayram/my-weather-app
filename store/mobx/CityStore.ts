import {action, observable} from "mobx";
import {factory} from "../../utils/logger";
import {City, CityMapValue} from "../../utils/typeDef";

const log = factory.getLogger("City store");

class Cities {

    @observable
    private cities: Map<string, CityMapValue>;

    @observable
    private currentCityName: string;

    @observable
    private city: City | undefined

    constructor() {
        this.cities = new Map<string, CityMapValue>();
        this.currentCityName = "";
    }

    @action
    public setCity(city: City | undefined) {
        this.city = city;
    }

    public getCities(): Map<string, CityMapValue> {
        return this.cities;
    }

    public getCity(): City | undefined {
        return this.city;
    }

    @action
    public setCurrentCityName(cityName: string): boolean {
        if (this.cities.has(cityName)) {
            this.currentCityName = cityName;
            log.debug(`city name ${cityName}`)
            return true;
        } else {
            log.debug(`city name ${cityName} not found.`)
            return false;
        }
    }

    @action
    addCity(icon: string, cityName: string) {
        cityName = cityName.toUpperCase();
        const cityStoreObject: CityMapValue = {
            icon: icon,
            cityName: cityName
        };
        this.cities.set(cityName, cityStoreObject);
    }

}

const store: Cities = new Cities();

export default store;
