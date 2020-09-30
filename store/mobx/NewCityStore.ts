import { AxiosError } from "axios";
import { action, observable } from "mobx";
import Toast from "react-native-root-toast";
import useRestCall from "../../components/hooks/useRestCall";
import { City } from "../../components/pojo/City";

export class CityStoreObject {

    @observable city: City | undefined;
    @observable cityName: string;
    @observable expiry: number | undefined;
    @observable isLoading: boolean;

    EXPIRY_IN_MINUTE: number = 1;

    constructor(cityName: string) {
        this.cityName = cityName;
        this.isLoading = true;
    }

    @action setCity(city: City) {
        this.city = city;
        this.expiry = Date.now() + this.EXPIRY_IN_MINUTE * 1000;
        this.loadingComplete();
    }

    public get getCity(): City | undefined {
        return this.city;
    }

    @action loadingComplete() {
        this.isLoading = false;
    }

    @action loadingStarted() {
        this.isLoading = true;
    }
}

class NewCityStore {

    @observable cities: Map<string, CityStoreObject>;

    constructor() {
        this.cities = new Map<string, CityStoreObject>();
    }

    @action setCity(cityName: string, onSuccessExecution: Function, onFailedExecution: Function) {
        cityName = cityName.toLowerCase()
        if (!this.cities.has(cityName)) {
            useRestCall(cityName, (city: City) => {
                const cityStoreObject: CityStoreObject = new CityStoreObject(cityName);
                cityStoreObject.setCity(city);
                this.cities.set(cityName, cityStoreObject);
                onSuccessExecution();
            }, onFailedExecution);
        } else {
            Toast.show('City updated', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                onShow: () => {
                },
                onShown: () => {
                },
                onHide: () => {
                },
                onHidden: () => {
                }
            });
            const cityStoreObject = this.cities.get(cityName);
            if (typeof (cityStoreObject) !== undefined && Date.now() > cityStoreObject.expiry) {
                cityStoreObject.loadingStarted()
                useRestCall(cityName, (city: City) => {
                    cityStoreObject.setCity(city);
                    onSuccessExecution();
                }, (error: AxiosError) => {
                    console.log(error);
                    onFailedExecution();
                });
            }
        }
    }

    public getCity(cityName: string): CityStoreObject | undefined {
        cityName = cityName.toLowerCase()
        const cityStoreObject = this.cities.get(cityName);

        if (typeof (cityStoreObject) !== undefined && Date.now() > cityStoreObject.expiry) {
            cityStoreObject.loadingStarted()
            useRestCall(cityName, (city: City) => {
                cityStoreObject.setCity(city);
            }, (error: AxiosError) => { console.log(error) });
        }
        return cityStoreObject;
    }

}

const store: NewCityStore = new NewCityStore();

export default store;
