import store from "../store/mobx/CityStore";
import {City} from "../utils/typeDef";
import {useObserver} from 'mobx-react'

const useGetCity = (): City | undefined => {
    return useObserver<City | undefined>(() => (store.city))
}

export default useGetCity;
