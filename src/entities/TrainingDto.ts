import { ExerciseDto } from "./ExerciseDto";

export interface TrainingDto {
    id:number;
    userId:string|undefined;
    trained:Date;
    exercise:ExerciseDto[];
}