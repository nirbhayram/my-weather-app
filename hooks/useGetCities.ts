import store from "../store/mobx/CityStore";
import {CityMapValue} from "../utils/typeDef";
import {useObserver} from 'mobx-react'

export default function useGetCities(): CityMapValue[] {
    return useObserver<CityMapValue[]>(() => (Array.from(store.getCities().values())));
}