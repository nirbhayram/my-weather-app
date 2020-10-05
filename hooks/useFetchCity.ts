import {useQuery} from "urql";
import store from "../store/mobx/CityStore";
import gql from "graphql-tag";

const GET_CITY_DETAILS = gql`
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
    const [response, executeQuery] = useQuery({
        query: GET_CITY_DETAILS,
        variables: {city: cityName},
        requestPolicy: 'network-only'
    })
    store.city = response.data?.cityDetails;
}

export default useFetchCity;
