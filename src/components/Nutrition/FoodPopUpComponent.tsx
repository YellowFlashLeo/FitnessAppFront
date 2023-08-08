import { randomInt } from "crypto";
import React, { forwardRef, useRef, useState } from "react";
import { Food } from "../../entities/Food";
import { FoodDto } from "../../entities/FoodDto";
import useNutritionStore from "../../store/nutritionStore";

interface Props {
  food: Food | undefined;
  onCancel: () => void;
}

const FoodPopUpComponent = forwardRef<HTMLFormElement, Props>(
  ({ food, onCancel }, ref) => {
    const [mealSize, setMealSize] = useState({ grams: 0, quantity: 1 });
    const addFood = useNutritionStore((s) => s.addFood);
    const setMealTime = useNutritionStore((s) => s.setMealTime);

    const currentTime: Date = new Date();
    const foodDto: FoodDto = {
      title: "",
      quantity: 1,
      foodTypeId: 0,
      weightGrams: 0,
      caloriesPer100: 0,
      fatsPer100: 0,
      carbsPer100: 0,
      proteinPer100: 0,
    };

    const onSave = () => {
      if (mealSize.grams && mealSize.quantity) {
        foodDto.title = food?.title ?? "Impossible";
        foodDto.foodTypeId = food?.foodTypeId ?? 0;
        foodDto.proteinPer100 = food?.proteinPer100 ?? 0;
        foodDto.caloriesPer100 = food?.caloriesPer100 ?? 0;
        foodDto.carbsPer100 = food?.carbPer100 ?? 0;
        foodDto.fatsPer100 = food?.fatsPer100 ?? 0;
        foodDto.weightGrams = mealSize.grams;
        foodDto.quantity = mealSize.quantity;

        addFood(foodDto);
        setMealTime(currentTime);
        onCancel();
      }
    };

    return (
      <>
        <div className="overlay" onClick={onCancel} />
        <form className="foodInput-form" ref={ref}>
          <p className="userInput-exName">{food?.title}</p>
          <div className="foodInput-inputs">
            <div className="userInput-block">
              <label className="input__label" htmlFor="quantity">
                Quantity:
              </label>
              <input
                onChange={(event) =>
                  setMealSize({
                    ...mealSize,
                    quantity: parseInt(event.target.value),
                  })
                }
                className="input"
                id="quantity"
                type="number"
                min="1"
                max="100"
                step="any"
                required
              />
            </div>
            <div className="userInput-block">
              <label className="input__label" htmlFor="gramms">
                Gramms:
              </label>
              <input
                onChange={(event) =>
                  setMealSize({
                    ...mealSize,
                    grams: parseInt(event.target.value),
                  })
                }
                className="input"
                id="gramms"
                type="number"
                min="1"
                max="100000"
                step="any"
                required
              />
            </div>
          </div>
          <div className="userInput-btnWrappers">
            <a className="userInput-btn" onClick={() => onCancel()}>
              Cancel
            </a>
            <a className="userInput-btn" onClick={() => onSave()}>
              Save
            </a>
          </div>
        </form>
      </>
    );
  }
);

export default FoodPopUpComponent;
