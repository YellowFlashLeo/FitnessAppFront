import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { StatResults } from "../entities/StatResults";


const apiClient = new APIClient<StatResults>('/MonthlyStatistics/stats');

const useStats = (userId:string) => 
    useQuery({
        queryKey:['stats',userId],
        queryFn:()=> apiClient.getStats(userId),
        staleTime:ms('24h')
    })


export default useStats;