import React from "react";
import { FoodDto } from "../../entities/FoodDto";

interface Props {
  foods: FoodDto[];
}

const MealConsistencyComponent = ({ foods }: Props) => {
  let calories = 0;
  let proteins = 0;
  let fats = 0;
  let carbs = 0;
  for (let i = 0; i < foods.length; i++) {
    calories += (foods[i].caloriesPer100 / 100) * foods[i].weightGrams;
    fats += (foods[i].fatsPer100 / 100) * foods[i].weightGrams;
    carbs += (foods[i].carbsPer100 / 100) * foods[i].weightGrams;
    proteins += (foods[i].proteinPer100 / 100) * foods[i].weightGrams;
  }
  return (
    <div className="summary">
      <h2 className="summary__half-title">Summary</h2>
      <ul className="summary__list">
        <li className="summary__list-item-sum">
          Calories: <strong>{Number(calories.toFixed(1))}</strong>
        </li>
        <li className="summary__list-item-sum">
          Proteins: <strong>{Number(proteins.toFixed(1))} g</strong>
        </li>
        <li className="summary__list-item-sum">
          Fats: <strong>{Number(fats.toFixed(1))} g</strong>
        </li>
        <li className="summary__list-item-sum">
          Carbs: <strong>{Number(carbs.toFixed(1))} g</strong>
        </li>
      </ul>
    </div>
  );
};

export default MealConsistencyComponent;
