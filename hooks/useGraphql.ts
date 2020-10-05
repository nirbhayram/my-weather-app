import {useQuery, UseQueryResponse} from "urql";

const CHECK_CITY_NAME = `
    query($city:String!) {
        getCityByName(name:$city){
            name
            current{
                icon
            }
        }
    }
`

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

export const checkCity = (cityName: string): UseQueryResponse<any> => {
    return useQuery({
        query: CHECK_CITY_NAME,
        variables: {city: cityName},
        pause: true,
        requestPolicy: 'network-only'
    })
};

export const getCityDetails = (cityName: string) => {
    return useQuery({
        query: GET_CITY_DETAILS,
        variables: {city: cityName},
        requestPolicy: 'network-only'
    })
}