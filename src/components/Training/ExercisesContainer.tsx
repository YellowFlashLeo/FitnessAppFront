import React from "react";
import { useParams } from "react-router-dom";
import useExercises from "../../hooks/useExercises";
import useTrainingQueryStore from "../../store/trainingStore";
import ExerciseComponent from "./ExerciseComponent";
import PreSaveExerciseComponent from "./PreSaveExerciseComponent";

const ExercisesContainer = () => {
  const params = useParams();
  const { data, error } = useExercises(params.bodyPartUrl!);
  const clientExercises = useTrainingQueryStore((t) => t.exercises);
  const date = useTrainingQueryStore((t) => t.trained);

  if (error) return null;

  return (
    <>
      <div id="content-section">
        <div className="container">
          <h1 className="content__title">Which part did you hit today?</h1>

          {clientExercises.length > 0 ? (
            <PreSaveExerciseComponent
              exercisesFromDb={data}
              exercises={clientExercises}
              date={date}
            />
          ) : (
            <div className="mealExercises-wrapper">
              {data?.data.map((exercise) => (
                <ExerciseComponent key={exercise.id} exerciseObj={exercise} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExercisesContainer;
