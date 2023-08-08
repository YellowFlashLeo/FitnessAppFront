import React from "react";
import { Dictionary } from "../entities/Dictionary";

interface Props {
  records: Dictionary;
}

const BestExerciseComponent = ({ records }: Props) => {
  if (records === null || Object.keys(records).length === 0) return null;
  const exercises = Object.keys(records);
  return (
    <ul className="summary__list">
      {exercises.map((exercise) => (
        <li key={exercise} className="summary__list-item-stats">
          {exercise} <strong>{records[exercise]}</strong>
        </li>
      ))}
    </ul>
  );
};

export default BestExerciseComponent;
