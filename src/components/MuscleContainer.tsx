import React from "react";
import useMuscles from "../hooks/useMuscles";
import Muscle from "./Muscle";

const MuscleContainer = () => {
  const { data, isLoading, error } = useMuscles();

  if (error) return null;

  return (
    <>
      <div id="content-section">
        <div className="container">
          <h1 className="content__title">Which part did you hit today?</h1>
          <div className="content-wrapper">
            {data?.data.map((bodyPart, index) => (
              <Muscle
                key={index}
                name={bodyPart.name}
                imageUrl={bodyPart.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MuscleContainer;
