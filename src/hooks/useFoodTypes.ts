import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { FoodType } from "../entities/FoodType";
import APIClient from "../services/api-client";


const apiClient = new APIClient<FoodType>('/Nutrition');

const useFoodTypes = () => 
    useQuery({
        queryKey:['foodTypes'],
        queryFn: apiClient.getAll,
        staleTime:ms('24h')
    });

export default useFoodTypes;