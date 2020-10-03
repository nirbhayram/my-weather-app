import { useQuery, UseQueryResponse, UseQueryState } from "urql";
import gql from 'graphql-tag'

const CHECK_CITY_NAME = gql`
    query($city:String!) {
        getCityByName(name:$city){
            name
            weather{
                summary{
                    icon
                }
            }
        }
    }
`

export const checkCity = (cityName: string): UseQueryResponse<any> => {
    console.log(`inside checkCity | ${cityName}`);
    return useQuery({
        query: CHECK_CITY_NAME,
        variables: { city:cityName },
        pause: true,
    })
};