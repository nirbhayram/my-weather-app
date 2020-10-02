import { action, computed, observable } from "mobx";
import useRestCall from "../../components/hooks/useRestCall";
import { City } from "../../components/object/City";
import { factory } from "../../components/utils/Logger";

const log = factory.getLogger("City store");

export class CityStoreObject {

    @observable
    city: City | undefined;

    @observable
    cityName: string;

    @observable
    expiry: number | undefined;

    @observable
    isLoading: boolean;

    EXPIRY_IN_MINUTE: number = 1;

    constructor(cityName: string) {
        this.cityName = cityName;
        this.isLoading = true;
    }

    @action
    setCity(city: City) {
        this.city = city;
        this.expiry = Date.now() + this.EXPIRY_IN_MINUTE * 1000 * 60;
        this.loadingComplete();
    }

    @action
    loadingComplete() {
        this.isLoading = false;
    }

    @action
    loadingStarted() {
        this.isLoading = true;
    }
}

class NewCityStore {

    @observable
    cities: Map<string, CityStoreObject>;

    @observable
    currentCityName: string;

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
    setCity(cityName: string): Promise<string> {
        log.debug(`inside setCity`)
        return new Promise((resolve, reject) => {
            if (!this.cities.has(cityName)) {
                useRestCall(cityName)
                    .then(
                        (city: City) => {
                            const cityStoreObject: CityStoreObject = new CityStoreObject(cityName);
                            cityStoreObject.setCity(city);
                            this.cities.set(city.name, cityStoreObject);
                            resolve(`${city.name}`);
                        })
                    .catch(
                        (error) => {
                            log.debug(`Caught an exception${error} `)
                            reject(error);
                        }
                    );
            }
            else {
                resolve(cityName);
            }
        })
    }

    @computed
    public get getCityStoreObject(): CityStoreObject {
        log.debug(`inside getCityStoreObject`)
        const cityStoreObject: CityStoreObject | undefined = this.cities.get(this.currentCityName);
        if (cityStoreObject) {
            if (this.getNumber(cityStoreObject.expiry) < Date.now()) {
                cityStoreObject.loadingStarted()
                useRestCall(cityStoreObject.cityName)
                    .then((city: City) => {
                        cityStoreObject.setCity(city);
                    })
                    .catch((error) => {
                        log.debug(`Caught an exception ${error}`);
                    })
            }
            return cityStoreObject;
        }
        return new CityStoreObject(this.currentCityName);
    }

    getNumber = (param: number | undefined): number => {
        return param ? param : 0;
    }

}

const store: NewCityStore = new NewCityStore();

export default store;
