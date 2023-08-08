import React from "react";

interface Props {
  carbs: number | undefined;
  fats: number | undefined;
  proteins: number | undefined;
  calories: number | undefined;
  date: Date;
}

const NutrientRecordComponent = ({
  carbs,
  fats,
  proteins,
  calories,
  date,
}: Props) => {
  return (
    <div className="record">
      <div className="record__title-wrapper">
        <span>Day Calories:{calories}</span>
        <span>{date.toLocaleDateString("en-US")}</span>
      </div>
      <ul className="record__exercises">
        <li className="record__exercise">
          <span className="record__inner-info">
            Carbs: <strong>{carbs}</strong>
          </span>
          <span className="record__inner-info">
            Fats: <strong>{fats} kg</strong>
          </span>
          <span className="record__inner-info">
            Proteins: <strong>{proteins}</strong>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NutrientRecordComponent;
