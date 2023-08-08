import React from "react";
import FoodTypeContainer from "../components/FoodTypeContainer";
import Hero from "../components/Hero";
import MuscleContainer from "../components/MuscleContainer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MuscleContainer />
      <FoodTypeContainer />
    </>
  );
};

export default HomePage;
