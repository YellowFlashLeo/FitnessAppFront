import {create} from "zustand";
import {mountStoreDevtool} from "simple-zustand-devtools";
import { ExerciseDto } from "../entities/ExerciseDto";

interface TrainingQueryStore {
    exercises:ExerciseDto[];
    trained:Date;
    addExercise:(exercise:ExerciseDto)=>void;
    removeExercise:(id:number)=>void;
    setTrainingTime:(time:Date)=>void;
    resetTraining:()=>void;
}

const intialState = {
    trained:new Date(),
    exercises:[]
}

const useTrainingQueryStore = create<TrainingQueryStore>(set=>({
    trained:new Date(),
    exercises:[],
    addExercise:(exerciseDt:ExerciseDto)=>set(store=>({exercises:[...store.exercises,exerciseDt]})),
    removeExercise:(id:number)=>set(store=>({exercises:store.exercises.filter((exercise,index)=>index !== id)})),
    setTrainingTime:(time:Date)=>set(store=>({trained:time})),
    resetTraining:()=>set(intialState)
}))

if (process.env.NODE_ENV === 'development'){
    mountStoreDevtool('GameQuery Store', useTrainingQueryStore);
}

export default useTrainingQueryStore;