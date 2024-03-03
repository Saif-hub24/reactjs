
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import axios from "axios";

export interface SingleGame {
    id: number;
    name: string;
  }


const useFetchGames = () => {



    const apiClient= new APIClient<SingleGame>('/games/1'); 
    return apiClient.getOne(); 
  


        
}
export default useFetchGames; 