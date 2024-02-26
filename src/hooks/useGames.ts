import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClients, { FetchResponse } from "../services/api-clients";



export interface Platform{
    id: number; 
    name: string; 
    slug: string; 
}

export interface Game {
    id: number;
    name: string;
    background_image: string; 
    parent_platforms:  {platform: Platform}[]; 
    metacritic: number;
    rating_top: number; 
  }

//AxiosRequestConfig object  
// const  useGames = (gameQuery : GameQuery ) => useData<Game>('/games', {
//   params: {
    // genres: gameQuery.genre?.id, 
    // platforms: gameQuery.platform?.id, 
    // ordering: gameQuery.sortOrder, 
    // search: gameQuery.searchText
//   }
// }, 
// [gameQuery]); 

const  useGames = (gameQuery : GameQuery ) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery], 
  queryFn: () => apiClients.get<FetchResponse<Game>>('/games', {
    params: {    
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id, 
      ordering: gameQuery.sortOrder, 
      search: gameQuery.searchText
    },
  })
  .then((res) => res.data),
}); 

export default useGames; 