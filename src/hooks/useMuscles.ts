import { useQuery } from "@tanstack/react-query";
import { Muscle } from "../entities/Muscle";
import ms from "ms";
import APIClient from "../services/api-client";


const apiClient = new APIClient<Muscle>('/BodyParts');

const useMuscles = () => 
    useQuery({
        queryKey:['muscles'],
        queryFn: apiClient.getAll,
        staleTime:ms('24h')
    })


export default useMuscles;