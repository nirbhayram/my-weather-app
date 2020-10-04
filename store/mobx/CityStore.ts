import { action, computed, observable } from "mobx";
import { UseQueryState } from "urql";
import { factory } from "../../components/utils/Logger";

const log = factory.getLogger("City store");

export class CityStoreObject {
    @observable
    icon: string;

    @observable
    cityName: string;

    constructor(name: string, icon: string) {
        this.cityName = name;
        this.icon = icon
    }
}

class NewCityStore {

    @observable
    cities: Map<string, CityStoreObject>;

    @observable
    currentCityName: string;

    @observable
    response: UseQueryState<any> | undefined

    @computed
    get fetching() { return (store?.response?.fetching || store?.response?.error ? true : false) }

    @computed
    get city() { return (store?.response?.data?.getCityByName) }

    constructor() {
        this.cities = new Map<string, CityStoreObject>();
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
    addCity(key: string, icon: string, cityName: string) {
        cityName = cityName.toUpperCase();
        const cityStoreObject: CityStoreObject = new CityStoreObject(cityName, icon);
        this.cities.set(cityName, cityStoreObject);
    }

}

const store: NewCityStore = new NewCityStore();

export default store;
