import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlateforms";




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

// const  useGames = (gameQuery : GameQuery ) => useQuery<FetchResponse<Game>, Error>({
//   queryKey: ['games', gameQuery], 
//   queryFn: () => apiClients.get<FetchResponse<Game>>('/games', {
//     params: {    
//       genres: gameQuery.genre?.id, 
//       parent_platforms: gameQuery.platform?.id, 
//       ordering: gameQuery.sortOrder, 
//       search: gameQuery.searchText
//     },
//   })
//   .then((res) => res.data),
// }); 

const apiclient = new APIClient<Game>("/games"); 

const  useGames = (gameQuery : GameQuery ) => 
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery], 
    queryFn:  () => 
      apiclient.getAll({
        params: {    
          genres: gameQuery.genre?.id, 
          parent_platforms: gameQuery.platform?.id, 
          ordering: gameQuery.sortOrder, 
          search: gameQuery.searchText
        },
    }),
  }); 

export default useGames; 