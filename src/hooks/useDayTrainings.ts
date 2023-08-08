import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { SortedByDay } from "../entities/SortedByDay";


const apiClient = new APIClient<SortedByDay>('/TrainingDay/allTrainings');

const useDayTrainings = (userId:string) => 
    useQuery({
        queryKey:['sortedByDateTrainings',userId],
        queryFn: ()=> apiClient.get(userId),
        staleTime:ms('24h')
    })


export default useDayTrainings;