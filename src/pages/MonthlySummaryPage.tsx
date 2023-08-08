import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import BestExerciseComponent from "../components/BestExerciseComponent";
import useStats from "../hooks/useStats";
import useStore from "../store/userStore";

const MonthlySummaryPage = () => {
  const userId = useStore((s) => s.email);
  const queryClient = useQueryClient();

  let data, isLoading, error;
  if (userId) {
    ({ data, isLoading, error } = useStats(userId));
  }

  if (error) return null;
  if (data?.message == "No records found") {
    return <h1 className="content__title">Records not found!</h1>;
  }

  useEffect(() => {
    queryClient.invalidateQueries(["stats", userId]);
  }, [queryClient, userId]);

  return (
    <>
      <div id="summary-section">
        <div className="container">
          {userId ? (
            <div className="summary-wrapper">
              <div className="summary">
                <h2 className="summary__half-title">
                  Your overall performance
                </h2>
                <p className="summary__list-name">Best Working Weight</p>
                {data?.data?.bestWorkingWeightPerExercise !== undefined && (
                  <BestExerciseComponent
                    records={data?.data?.bestWorkingWeightPerExercise!}
                  />
                )}
                <p className="summary__list-name">
                  Avg Reps per training:
                  <strong>{data?.data?.averageAmountOfRepsPerTraining}</strong>
                </p>
                <p className="summary__list-name">
                  Avg Sets per training:
                  <strong>{data?.data?.averageAmountOfSetsPerTraining}</strong>
                </p>
              </div>
              <div className="summary">
                <h2 className="summary__half-title">Your overall nutriotion</h2>
                <ul className="summary__list">
                  <li className="summary__list-item-sum">
                    Avg Calories consumed per Day:
                    <strong>{data?.data?.averageAmountOfCaloriesPerDay}</strong>
                  </li>
                  <li className="summary__list-item-sum">
                    Avg Carbs consumed per Day:
                    <strong>{data?.data?.averageAmountOfCarbsPerDay}</strong>
                  </li>
                  <li className="summary__list-item-sum">
                    Avg Protein consumed per Day:
                    <strong>{data?.data?.averageAmountOfProteinsPerDay}</strong>
                  </li>
                  <li className="summary__list-item-sum">
                    Avg Fats consumed per Day:
                    <strong>{data?.data?.averageAmountOfFatsPerDay}</strong>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <h1 className="content__title">You need to Log In first!</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default MonthlySummaryPage;
