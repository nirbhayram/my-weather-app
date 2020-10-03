import { useQuery } from "urql";

const QUERY:string = `
    query($city:String!) {
        getCityByName(name:$city){
            name
        }
    }
`

export const useGraphql = (name:string) => {
    const [res, executeQuery] = useQuery<string>({
        query: QUERY,
        variables:{city:name}
    });
    return [res,executeQuery];
};