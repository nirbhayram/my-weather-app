import store from "../store/mobx/CityStore";
import {CityMapValue} from "../utils/typeDef";

export default function useGetCities(): Array<CityMapValue> {
    return Array.from(store.cities.values())
}