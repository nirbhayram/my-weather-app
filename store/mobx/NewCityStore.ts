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
    setCity(cityName: string): Promise<string> {
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
                            console.log(`Caught an exception${error} `)
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
        const cityStoreObject: CityStoreObject | undefined = this.cities.get(this.currentCityName);
        if (cityStoreObject) {
            if (this.getNumber(cityStoreObject.expiry) < Date.now()) {
                cityStoreObject.loadingStarted()
                useRestCall(cityStoreObject.cityName)
                    .then((city:City)=>{
                        cityStoreObject.setCity(city);
                    })
                    .catch((error)=>{
                        console.log(`Caught an exception ${error}`);
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
