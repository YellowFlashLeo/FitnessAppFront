import ms from "ms";
import { SortedByDayNutrients } from "../entities/SortedByDayNutrients";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<SortedByDayNutrients>('/TrainingDay/allMeals');

const useDayNutrients = (userId:string) => 
    useQuery({
        queryKey:['sortedByDateNutrients',userId],
        queryFn: ()=> apiClient.get(userId),
        staleTime:ms('24h')
    })


export default useDayNutrients;