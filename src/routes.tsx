import { createBrowserRouter } from "react-router-dom";
import ExercisesContainer from "./components/Training/ExercisesContainer";
import FoodContainer from "./components/Nutrition/FoodContainer";
import FoodTypeContainer from "./components/FoodTypeContainer";
import MuscleContainer from "./components/MuscleContainer";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import MonthlySummaryPage from "./pages/MonthlySummaryPage";
import RecordsPage from "./pages/RecordsPage";
import RegisterPage from "./pages/RegisterPage";
import React from "react";
import NutrientsPage from "./pages/NutrientsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },

      {
        path: "/nutrients",
        element: <NutrientsPage />,
      },

      {
        path: "/records",
        element: <RecordsPage />,
      },

      {
        path: "/monthSummary",
        element: <MonthlySummaryPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },

      {
        path: "/bodyParts",
        element: <MuscleContainer />,
      },
      {
        path: "/bodyParts/bodyPart/:bodyPartUrl",
        element: <ExercisesContainer />,
      },
      {
        path: "/nutrition",
        element: <FoodTypeContainer />,
      },
      {
        path: "/nutrition/foodType/:foodTypeUrl",
        element: <FoodContainer />,
      },
    ],
  },
]);

export default router;
