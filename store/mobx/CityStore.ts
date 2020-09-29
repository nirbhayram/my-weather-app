import { action, computed, observable } from 'mobx'
import { City } from '../../components/pojo/City'

class CityStore {
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

    @action changeCity(name: string) {
        const tempList: Array<City> = this.listCity.slice();
        tempList.forEach((item: City, index: number) => {
            if (item.name === name) {
                const tempCity: City = this.listCity[0];
                this.listCity[0] = this.listCity[index];
                this.listCity[index] = tempCity;
            }
        })
    }

}

const store = new CityStore();
export default store;
