import { AxiosError } from "axios";
import { action, computed, observable } from "mobx";
import Toast from "react-native-root-toast";
import useRestCall from "../../components/hooks/useRestCall";
import { City } from "../../components/pojo/City";

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
    public setCurrentCityName(cityName: string): boolean {
        console.log(`city name ${cityName}`)
        console.log(`all keys ${Array.from(this.cities.keys())}`)
        if (this.cities.has(cityName)) {
            this.currentCityName = cityName;
            return true;
        } else {
            Toast.show('something went wrong!', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0
            });
            return false;
        }
    }

    @action
    setCity(cityName: string, onSuccessExecution: Function, onFailedExecution: Function) {
        if (!this.cities.has(cityName)) {
            useRestCall(cityName, (city: City) => {
                const cityStoreObject: CityStoreObject = new CityStoreObject(cityName);
                cityStoreObject.setCity(city);
                this.cities.set(city.name, cityStoreObject);
                onSuccessExecution();
            }, onFailedExecution);
        } else {
            Toast.show('City updated', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0
            });
        }
    }

    @computed
    public get getCityStoreObject(): CityStoreObject {
        if (this.cities.has(this.currentCityName)) {
            const cityStoreObject: CityStoreObject = this.cities.get(this.currentCityName);
            if (cityStoreObject.expiry < Date.now()) {
                cityStoreObject.loadingStarted()
                useRestCall(this.currentCityName, (city: City) => {
                    cityStoreObject.setCity(city);
                }, (error: AxiosError) => { console.log(error) });
            }
            return cityStoreObject;
        }
        return new CityStoreObject(this.currentCityName);
    }


}

const store: NewCityStore = new NewCityStore();

export default store;
