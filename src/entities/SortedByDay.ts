import { ExerciseDto } from "./ExerciseDto";

export interface SortedByDay {
    dayOfTheYear:number;
    muscleGroups:string[];
    exercises:ExerciseDto[]
}