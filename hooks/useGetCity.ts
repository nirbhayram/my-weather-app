import store from "../store/mobx/CityStore";
import {City} from "../utils/typeDef";

const useGetCity = (): City | undefined => {
    return store.city;
}

export default useGetCity;
