import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Exercise } from "../../entities/Exercise";
import { ExerciseDto } from "../../entities/ExerciseDto";
import { TrainingDto } from "../../entities/TrainingDto";
import useMuscles from "../../hooks/useMuscles";
import useSaveTraining from "../../hooks/useSaveTraining";
import { FetchResponce } from "../../services/api-client";
import useTrainingQueryStore from "../../store/trainingStore";
import useStore from "../../store/userStore";
import ExerciseComponent from "./ExerciseComponent";
import RecordComponent from "./RecordComponent";
import "react-toastify/dist/ReactToastify.css";
import TrainingDaySummaryComponent from "./TrainingDaySummaryComponent";

interface SortedPerMuscleExercises {
  [muscleId: number]: ExerciseDto[];
}

interface Props {
  exercisesFromDb: FetchResponce<Exercise> | undefined;
  exercises: ExerciseDto[];
  date: Date;
}

const PreSaveExerciseComponent = ({
  exercisesFromDb,
  exercises,
  date,
}: Props) => {
  const savedExercises = useTrainingQueryStore((s) => s.exercises);
  const trainedTime = useTrainingQueryStore((s) => s.trained);
  const userId = useStore((s) => s.email);
  const { data, error } = useMuscles();
  const { mutate, error: mutateError } = useSaveTraining();

  if (error) return null;

  if (mutateError) {
    toast.error(mutateError?.response.data);
  }

  const sortedPerMuscle: SortedPerMuscleExercises = {};

  exercises.forEach((exercise: ExerciseDto) => {
    if (!sortedPerMuscle[exercise.bodyPartId]) {
      sortedPerMuscle[exercise.bodyPartId] = [];
    }
    sortedPerMuscle[exercise.bodyPartId].push(exercise);
  });

  const onPostToServer = () => {
    const trainingDayDto: TrainingDto = {
      id: 0,
      trained: trainedTime,
      userId: userId,
      exercise: savedExercises,
    };
    mutate(trainingDayDto);
  };

  return (
    <>
      <div className="pagedivider">
        <div className="mealExercises-wrapper">
          {exercisesFromDb?.data.map((exerciseFromDb) => (
            <ExerciseComponent
              key={exerciseFromDb.id}
              exerciseObj={exerciseFromDb}
            />
          ))}
        </div>
        <div>
          <div className="records-wrapper">
            {Object.keys(sortedPerMuscle).map((muscleId, index) => (
              <TrainingDaySummaryComponent
                key={index}
                muscleName={
                  data?.data.find((m) => m.id == parseInt(muscleId))?.name
                }
                date={date}
                exercises={sortedPerMuscle[parseInt(muscleId)]}
              />
            ))}
          </div>
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

export default PreSaveExerciseComponent;
