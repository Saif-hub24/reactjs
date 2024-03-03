import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import APIClient from "../services/api-client";
import ms from 'ms';
import { Genre } from "../entities/Genre";
const apiClient = new APIClient<Genre>("/genres"); 


// const useGenres = () => useData<Genre>('/genres', {}); 
// const useGenres = () => ({data: genre ,  isLoading : false, error: false});

const useGenres = () => 
    useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: genres
    }); 


export default useGenres; 