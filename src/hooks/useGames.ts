import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

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

const  useGames = () => { 
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery], 
    queryFn:  ({pageParam = 1}) => 
      apiclient.getAll({
        params: {    
          genres: gameQuery.genreId, 
          parent_platforms: gameQuery.platformId, 
          ordering: gameQuery.sortOrder, 
          search: gameQuery.searchText,
          page: pageParam
        },
    }),
    getNextPageParam: (lastPage, allPages) => {
      return  lastPage.next ? allPages.length +1  : undefined; 
    },
    staleTime:  ms('24h'),
  }); }

export default useGames; 