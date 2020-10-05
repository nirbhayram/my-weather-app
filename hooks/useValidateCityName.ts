import {useQuery} from "urql";

const CHECK_CITY_NAME = `
    query($city:String!) {
        data:getCityByName(name:$city){
            name
            current{
                icon
            }
        }
    }
`
export default function useValidateCityName(cityName: string) {
    const [response, executeQuery] = useQuery({
        query: CHECK_CITY_NAME,
        variables: {city: cityName},
        pause: true,
        requestPolicy: 'network-only'
    })
    return [response.fetching, response.data?.data, response.error, executeQuery]
};