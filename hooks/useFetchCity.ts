import {useQuery} from "urql";
import store from "../store/mobx/CityStore";

const GET_CITY_DETAILS = `
    query($city:String!) {
        cityDetails:getCityByName(name:$city){
            name
            dt
            current{
                temperature
                icon
                main
                sunrise
                sunset
                pop
                uv
                dewDrops
                windSpeed
                humidity
            }
            hourData{
                time
                icon
                temperature
            }
            dailyData{
                date
                icon
                minTemperature
                maxTemperature
            }
        }
    }
`

const useFetchCity = (cityName: string) => {
    const [response] = useQuery({
        query: GET_CITY_DETAILS,
        variables: {city: cityName},
        requestPolicy: 'network-only'
    })
    store.setCity(response.data?.cityDetails);
}

export default useFetchCity;
