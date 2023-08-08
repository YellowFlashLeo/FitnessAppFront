import { FoodDto } from "./FoodDto";

export interface NutritionDto {
    id:number;
    userId:string|undefined;
    mealTime:Date;
    foods:FoodDto[];
}