import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Exercise } from "../../entities/Exercise";
import { ExerciseDto } from "../../entities/ExerciseDto";
import useTrainingQueryStore from "../../store/trainingStore";

interface Props {
  exercise: Exercise | undefined;
  onCancel: () => void;
}
const ExercisePopUpComponent = forwardRef<HTMLFormElement, Props>(
  ({ exercise, onCancel }, ref) => {
    const [exerciseInfo, setExerciseInfo] = useState({
      reps: 0,
      sets: 0,
      weight: 0,
      pre: 0,
    });
    const addExercise = useTrainingQueryStore((t) => t.addExercise);

    const currentDate: Date = new Date();
    const exerciseDto: ExerciseDto = {
      name: "",
      bodyPartId: 0,
      reps: 0,
      weight: 0,
      sets: 0,
      rpe: 0,
    };

    const onSave = () => {
      if (
        exerciseInfo.pre &&
        exerciseInfo.weight &&
        exerciseInfo.sets &&
        exerciseInfo.reps
      ) {
        exerciseDto.name = exercise?.name ?? "Could not read";
        exerciseDto.bodyPartId = exercise?.bodyPartId ?? 0;
        exerciseDto.reps = exerciseInfo.reps;
        exerciseDto.sets = exerciseInfo.sets;
        exerciseDto.weight = exerciseInfo.weight;
        exerciseDto.rpe = exerciseInfo.pre;

        addExercise(exerciseDto);
        onCancel();
      }
    };

    return (
      <>
        <div className="overlay" onClick={onCancel} />
        <form className="userInput-form" ref={ref} tabIndex={0} autoFocus>
          <p className="userInput-exName">{exercise?.name}</p>
          <div className="userInput-inputs">
            <div className="userInput-block">
              <label className="input__label" htmlFor="reps">
                Reps:
              </label>
              <input
                onChange={(event) =>
                  setExerciseInfo({
                    ...exerciseInfo,
                    reps: parseInt(event.target.value),
                  })
                }
                className="input"
                id="reps"
                type="number"
                min="1"
                max="100"
                step="any"
                required
              />
            </div>
            <div className="userInput-block">
              <label className="input__label" htmlFor="sets">
                Sets:
              </label>
              <input
                onChange={(event) =>
                  setExerciseInfo({
                    ...exerciseInfo,
                    sets: parseInt(event.target.value),
                  })
                }
                className="input"
                id="sets"
                type="number"
                min="1"
                max="100"
                step="any"
                required
              />
            </div>
            <div className="userInput-block">
              <label className="input__label" htmlFor="weight">
                Weight(kg):
              </label>
              <input
                onChange={(event) =>
                  setExerciseInfo({
                    ...exerciseInfo,
                    weight: parseInt(event.target.value),
                  })
                }
                className="input"
                id="weight"
                type="number"
                min="1"
                max="300"
                step="any"
                required
              />
            </div>
            <div className="userInput-block">
              <label className="input__label" htmlFor="pre">
                PRE:
              </label>
              <input
                onChange={(event) =>
                  setExerciseInfo({
                    ...exerciseInfo,
                    pre: parseInt(event.target.value),
                  })
                }
                className="input"
                id="pre"
                type="number"
                min="1"
                max="10"
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

export default ExercisePopUpComponent;
