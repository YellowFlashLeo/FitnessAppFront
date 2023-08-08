import React from "react";
import { useParams } from "react-router-dom";
import useFood from "../../hooks/useFood";
import useNutritionStore from "../../store/nutritionStore";
import FoodComponent from "./FoodComponent";
import PreSaveFoodComponent from "./PreSaveFoodComponent";

const FoodContainer = () => {
  const params = useParams();
  const { data, isLoading, error } = useFood(params.foodTypeUrl!);
  const clientFoods = useNutritionStore((f) => f.foods);
  const date = useNutritionStore((f) => f.mealTime);

  if (error) return null;

  return (
    <>
      <div id="content-section">
        <div className="container">
          <h1 className="content__title">Lets Record your meal</h1>

          {clientFoods.length > 0 ? (
            <PreSaveFoodComponent
              foodsFromDb={data}
              clientStoredFoods={clientFoods}
              date={date}
            />
          ) : (
            <div className="mealExercises-wrapper">
              {data?.data.map((f) => (
                <FoodComponent key={f.id} foodObject={f} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodContainer;
