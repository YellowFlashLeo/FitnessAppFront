import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Exercise } from "../entities/Exercise";
import APIClient from "../services/api-client";


const apiClient = new APIClient<Exercise>('/BodyParts/bodyPart');

const useExercises = (bodyPartUrl:string) =>useQuery({
    queryKey:['bodyParts/bodyPart',bodyPartUrl],
    queryFn:() => apiClient.get(bodyPartUrl),
    staleTime:ms('24h')
});

export default useExercises;