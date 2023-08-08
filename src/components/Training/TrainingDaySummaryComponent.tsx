import React from "react";
import { ExerciseDto } from "../../entities/ExerciseDto";
import useTrainingQueryStore from "../../store/trainingStore";

interface Props {
  exercises: ExerciseDto[];
  date: Date;
  muscleName: string | undefined;
}

const TrainingDaySummaryComponent = ({
  exercises,
  date,
  muscleName,
}: Props) => {
  const removeExercise = useTrainingQueryStore((e) => e.removeExercise);

  return (
    <div className="record">
      <div className="record__title-wrapper">
        <span>Muscle Group:{muscleName}</span>
        <span>{date.toLocaleDateString("en-US")}</span>
      </div>
      <ul className="record__exercises">
        {exercises.map((exercise, index) => (
          <>
            <li key={index} className="record__exercise">
              <span className="record__inner-info">
                Exercise: <strong>{exercise.name}</strong>
              </span>
              <span className="record__inner-info">
                Weight: <strong>{exercise.weight} kg</strong>
              </span>
              <span className="record__inner-info">
                Sets: <strong>{exercise.sets}</strong>
              </span>
              <span className="record__inner-info">
                Reps: <strong>{exercise.reps}</strong>
              </span>
            </li>
            <button
              className="hero-btn record-deleteBtn"
              onClick={() => removeExercise(index)}
            >
              Remove
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TrainingDaySummaryComponent;
