import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Exercise } from "../../entities/Exercise";
import useStore from "../../store/userStore";
import ExercisePopUpComponent from "./ExercisePopUpComponent";

interface Props {
  exerciseObj: Exercise;
}

const ExerciseComponent = ({ exerciseObj }: Props) => {
  const [popUp, setPopUp] = useState(false);
  const userId = useStore((s) => s.email);
  const navigate = useNavigate();

  const hostname = window.location.hostname;
  const protocol = window.location.protocol;
  const port = window.location.port;

  const baseUrl = `${protocol}//${hostname}:${port}/`;
  const backgroundImg = `url(${baseUrl}/src/${exerciseObj.imageUrl})`;
  const popupRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (popUp && popupRef.current) {
      popupRef.current.focus();
    }
  }, [popUp]);

  return (
    <>
      <a
        className="mealExercise"
        style={{
          background: `${backgroundImg} 50% / cover no-repeat`,
        }}
        onClick={() => (!userId ? navigate("/login") : setPopUp(!popUp))}
      >
        <p className="content__name">{exerciseObj.name}</p>
      </a>
      {popUp && (
        <ExercisePopUpComponent
          exercise={exerciseObj}
          ref={popupRef}
          onCancel={() => setPopUp(false)}
        />
      )}
    </>
  );
};

export default ExerciseComponent;
