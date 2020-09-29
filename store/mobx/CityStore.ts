import { action, computed, observable } from 'mobx'
import { City } from '../../components/pojo/City'

class CityStore {

    @observable currentIndex:number = 0;

    @observable listCity: Array<City> = []

    @action setCity(city: City) {
        this.listCity.push(city);
    }

    @action removeCity(index: number) {
        this.listCity = this.listCity.filter((item, i) => i !== index);
    }

    @computed get isEmpty() {
        return this.listCity.length === 0;
    }

    @action changeCity(index: number) {
        this.currentIndex = index;
    }

}

const store = new CityStore();
export default store;
