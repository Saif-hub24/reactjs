
import { useQuery } from '@tanstack/react-query';
import apiClients, { FetchResponse } from '../services/api-clients';
import platforms from '../data/platforms';

export interface Platform{
    id: number; 
    name: string; 
    slug: string; 
}

// const usePlateforms = () =>   useData<Platform>('/platforms/lists/parents');  
const usePlateforms = () =>  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () => apiClients.get( '/platforms/lists/parents').then(res => res.data),
    staleTime: 24*60*60 *1000,  //one day in mili seconds
    initialData: {count: platforms.length, results: platforms}
}); 
export default usePlateforms; 