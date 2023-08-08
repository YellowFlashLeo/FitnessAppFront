import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import RecordComponent from "../components/Training/RecordComponent";
import useDayTrainings from "../hooks/useDayTrainings";
import useStore from "../store/userStore";

const getDateFromDayOfYear = (year: number, dayOfYear: number) => {
  const date = new Date(year, 0); // Initialize with January 1st of the specified year
  date.setDate(dayOfYear); // Set the day of the year

  return date;
};

const RecordsPage = () => {
  const userId = useStore((s) => s.email);
  const queryClient = useQueryClient();

  let data, isLoading, error;
  const year = new Date();

  if (userId) {
    ({ data, isLoading, error } = useDayTrainings(userId));
  }
  if (error) return null;
  if (data?.message == "No records found") {
    return <h1 className="content__title">Records not found!</h1>;
  }

  useEffect(() => {
    queryClient.invalidateQueries(["sortedByDateTrainings", userId]);
  }, [queryClient, userId]);

  return (
    <>
      <div id="records-section">
        <div className="container">
          {userId ? (
            <div className="records-wrapper">
              {data?.data.map((day, index) => (
                <RecordComponent
                  key={index}
                  muscleName={day.muscleGroups.join(",")}
                  date={getDateFromDayOfYear(
                    year.getFullYear(),
                    day.dayOfTheYear
                  )}
                  exercises={day.exercises}
                />
              ))}
            </div>
          ) : (
            <h1 className="content__title">You need to Log In first!</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default RecordsPage;
