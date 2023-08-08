import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Food } from "../../entities/Food";
import { FoodDto } from "../../entities/FoodDto";
import { NutritionDto } from "../../entities/NutritionDto";
import useFoodTypes from "../../hooks/useFoodTypes";
import useSaveNutrition from "../../hooks/useSaveNutrition";
import { FetchResponce } from "../../services/api-client";
import useNutritionStore from "../../store/nutritionStore";
import useStore from "../../store/userStore";
import FoodComponent from "./FoodComponent";
import MealConsistencyComponent from "./MealConsistencyComponent";
import { NutritionDaySummaryComponent } from "./NutritionDaySummaryComponent";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  foodsFromDb: FetchResponce<Food> | undefined;
  clientStoredFoods: FoodDto[];
  date: Date;
}

interface SortedPerFoodTypeFoods {
  [muscleId: number]: FoodDto[];
}

const PreSaveFoodComponent = ({
  foodsFromDb,
  clientStoredFoods,
  date,
}: Props) => {
  const mealTime = useNutritionStore((s) => s.mealTime);
  const userId = useStore((s) => s.email);
  const { data, error } = useFoodTypes();
  const { mutate, error: mutateError } = useSaveNutrition();

  if (error) return null;

  if (mutateError) {
    toast.error(mutateError?.response.data);
  }
  const sortedPerFoodType: SortedPerFoodTypeFoods = {};

  clientStoredFoods.forEach((food: FoodDto) => {
    if (!sortedPerFoodType[food.foodTypeId]) {
      sortedPerFoodType[food.foodTypeId] = [];
    }
    sortedPerFoodType[food.foodTypeId].push(food);
  });

  const onPostToServer = () => {
    const nutritionDayDto: NutritionDto = {
      id: 0,
      userId: userId,
      mealTime: mealTime,
      foods: clientStoredFoods,
    };

    mutate(nutritionDayDto);
  };

  return (
    <>
      <div className="pagedivider">
        <div className="mealExercises-wrapper">
          {foodsFromDb?.data.map((f) => (
            <FoodComponent key={f.id} foodObject={f} />
          ))}
        </div>
        <div>
          <div className="records-wrapper">
            {Object.keys(sortedPerFoodType).map((foodTypeId, index) => (
              <NutritionDaySummaryComponent
                key={`${foodTypeId}-${index}`}
                foodTypeName={
                  data?.data.find((m) => m.id == parseInt(foodTypeId))?.name
                }
                date={date}
                foods={sortedPerFoodType[parseInt(foodTypeId)]}
              />
            ))}
          </div>
          <MealConsistencyComponent foods={clientStoredFoods} />
          <button
            onClick={() => onPostToServer()}
            className="hero-btn records-btn"
          >
            Save
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default PreSaveFoodComponent;
