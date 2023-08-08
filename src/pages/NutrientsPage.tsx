import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import NutrientRecordComponent from "../components/Nutrition/NutrientRecordComponent";
import useDayNutrients from "../hooks/useDayNutrients";
import useStore from "../store/userStore";

const getDateFromDayOfYear = (year: number, dayOfYear: number) => {
  const date = new Date(year, 0); // Initialize with January 1st of the specified year
  date.setDate(dayOfYear); // Set the day of the year

  return date;
};

const NutrientsPage = () => {
  const userId = useStore((s) => s.email);
  const queryClient = useQueryClient();

  let data, isLoading, error;
  const year = new Date();

  if (userId) {
    ({ data, isLoading, error } = useDayNutrients(userId));
  }

  if (error) return null;
  if (data?.message == "No records found") {
    return <h1 className="content__title">Records not found!</h1>;
  }

  useEffect(() => {
    queryClient.invalidateQueries(["sortedByDateNutrients", userId]);
  }, [queryClient, userId]);

  return (
    <>
      <div id="records-section">
        <div className="container">
          {userId ? (
            <div className="records-wrapper">
              {data?.data.map((day, index) => (
                <NutrientRecordComponent
                  key={index}
                  calories={day.dayCalories}
                  carbs={day.dayCarbs}
                  proteins={day.dayProteins}
                  fats={day.dayFats}
                  date={getDateFromDayOfYear(
                    year.getFullYear(),
                    day.dayOfTheYear
                  )}
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

export default NutrientsPage;
