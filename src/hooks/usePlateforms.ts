import useData from './useData';

interface Platform{
    id: number; 
    name: string; 
    slug: string; 
}

const usePlateforms = () =>   useData<Platform>('/platforms/lists/parents'); 

export default usePlateforms; 