import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Food } from "../../entities/Food";
import useStore from "../../store/userStore";
import FoodPopUpComponent from "./FoodPopUpComponent";

interface Props {
  foodObject: Food;
}

const FoodComponent = ({ foodObject }: Props) => {
  const [popUp, setPopUp] = useState(false);
  const popupRef = useRef<HTMLFormElement>(null);
  const userId = useStore((s) => s.email);

  const navigate = useNavigate();
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;
  const port = window.location.port;

  const baseUrl = `${protocol}//${hostname}:${port}/`;
  const backgroundImg = `url(${baseUrl}/src/${foodObject.imageUrl})`;

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
        <p className="content__name">{foodObject.title}</p>
      </a>

      {popUp && (
        <FoodPopUpComponent
          food={foodObject}
          ref={popupRef}
          onCancel={() => setPopUp(false)}
        />
      )}
    </>
  );
};

export default FoodComponent;
