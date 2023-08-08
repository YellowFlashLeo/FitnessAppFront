import { FoodDto } from "../entities/FoodDto";
import {create} from "zustand";
import {mountStoreDevtool} from "simple-zustand-devtools";

interface NutritionQueryStore {
    foods:FoodDto[];
    mealTime:Date;
    addFood:(food:FoodDto)=>void;
    setMealTime:(time:Date)=>void;
    removeMeal:(id:number) => void;
    resetMeal:()=>void;
}

const initialState  = {
    mealTime:new Date(),
    foods:[]
}

const useNutritionStore = create<NutritionQueryStore>(set=>({
    userId:"",
    mealTime:new Date(),
    foods:[],
    addFood: (foodDto:FoodDto)=>set(store=>({foods:[...store.foods,foodDto]})),
    setMealTime:(time:Date)=>set(store=>({mealTime:time})),
    removeMeal: (id: number) => set((store) => ({ foods: store.foods.filter((food,index) => index !== id) })),
    resetMeal:()=>set(initialState)
}))

if (process.env.NODE_ENV === 'development'){
    mountStoreDevtool('GameQuery Store', useNutritionStore);
}

export default useNutritionStore;