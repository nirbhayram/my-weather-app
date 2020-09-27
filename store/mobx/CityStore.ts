import { action, observable } from 'mobx'
import { City } from '../../components/pojo/City'

class CityStore {
    @observable listCity: Array<City> = []

    @action setCity(city: City){
        this.listCity.push(city);
    }

    @action removeCity(index:number){
        this.listCity = this.listCity.filter((item,i)=>i!==index);
    }

}

const store = new CityStore();
export default store;
