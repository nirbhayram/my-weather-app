import store from "../store/mobx/CityStore";

export default function useAddCity(icon: string, name: string) {
    store.addCity(icon, name)
}
