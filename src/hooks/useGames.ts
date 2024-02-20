import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";


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
  }

//AxiosRequestConfig object  
const useGames = (selectedGenre : Genre | null ) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]); 
export default useGames; 