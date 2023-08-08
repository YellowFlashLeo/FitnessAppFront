import React from "react";
import useFoodTypes from "../hooks/useFoodTypes";
import FoodType from "./FoodType";

const FoodTypeContainer = () => {
  const { data, isLoading, error } = useFoodTypes();

  if (error) return null;

  return (
    <>
      <div id="content-section">
        <div className="container">
          <h1 className="content__title">Lets Record your meal</h1>
          <div className="content-wrapper">
            {data?.data.map((foodType) => (
              <FoodType
                key={foodType.id}
                name={foodType.name}
                imageUrl={foodType.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodTypeContainer;
