import store from "../store/mobx/CityStore";

export const useSetCityName = (cityName: string): boolean => {
    return store.setCurrentCityName(cityName);
}