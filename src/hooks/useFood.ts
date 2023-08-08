import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Food } from "../entities/Food";
import APIClient from "../services/api-client";


const apiClient = new APIClient<Food>('/Nutrition/foodType');

const useFood = (foodTypeUrl:string) =>useQuery({
    queryKey:['nutrition/foodType',foodTypeUrl],
    queryFn:() => apiClient.get(foodTypeUrl),
    staleTime:ms('24h')
});

export default useFood;