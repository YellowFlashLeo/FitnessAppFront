import { useMutation } from "@tanstack/react-query";
import { CustomError } from "../entities/CustomError";
import { NutritionDto } from "../entities/NutritionDto";
import { axiosInstance } from "../services/api-client";
import useNutritionStore from "../store/nutritionStore"


const useSaveNutrition = ()=>{
    const resetNutrition = useNutritionStore((s)=>s.resetMeal);

    return useMutation(
        (nutrition:NutritionDto) => 
           axiosInstance.post('/TrainingDay/saveMeal',nutrition),
           {
            onSuccess:() => {
                resetNutrition();
            },
            onError:(error:CustomError) => {
            }
      }
    );
}

export default useSaveNutrition;