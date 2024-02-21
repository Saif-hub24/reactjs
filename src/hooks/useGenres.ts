import genre from "../data/genre";
// import useData from "./useData";

export interface Genre{
    id: number; 
    name: string; 
    image_background: string; 

}
// const useGenres = () => useData<Genre>('/genres', {}); 
const useGenres = () => ({data: genre ,  isLoading : false, error: false});

export default useGenres; 