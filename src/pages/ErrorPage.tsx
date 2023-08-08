import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="error-title">Oops</h1>
        <p className="error-text">
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "Unexpected error occured"}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
