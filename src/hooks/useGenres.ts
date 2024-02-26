import { useQuery } from "@tanstack/react-query";

import apiClients, { FetchResponse } from "../services/api-clients";
import genres from "../data/genre";

export interface Genre{
    id: number; 
    name: string; 
    image_background: string; 

}
// const useGenres = () => useData<Genre>('/genres', {}); 
// const useGenres = () => ({data: genre ,  isLoading : false, error: false});


const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () =>  apiClients.get('/genres').then(res => res.data), 
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: genres.length, results: genres }
}); 


export default useGenres; 