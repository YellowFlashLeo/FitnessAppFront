import React from "react";
import { FoodDto } from "../../entities/FoodDto";
import useNutritionStore from "../../store/nutritionStore";

interface Props {
  foods: FoodDto[];
  date: Date;
  foodTypeName: string | undefined;
}

export const NutritionDaySummaryComponent = ({
  foods,
  date,
  foodTypeName,
}: Props) => {
  const removeMeal = useNutritionStore((s) => s.removeMeal);

  return (
    <div className="record">
      <div className="record__title-wrapper">
        <span>Nutrition:{foodTypeName}</span>
        <span>{date.toLocaleDateString("en-US")}</span>
      </div>
      <ul className="record__exercises">
        {foods.map((food, index) => (
          <>
            <li className="record__exercise" key={index}>
              <span className="record__inner-info">
                Food: <strong>{food.title}</strong>
              </span>
              <span className="record__inner-info">
                Weight: <strong>{food.weightGrams} grams</strong>
              </span>
              <span className="record__inner-info">
                Calories: <strong>{food.caloriesPer100}</strong>
              </span>
            </li>
            <button
              className="hero-btn record-deleteBtn"
              onClick={() => removeMeal(index)}
            >
              Remove
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};
