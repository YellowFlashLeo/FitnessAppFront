import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  imageUrl: string;
}

const FoodType = ({ name, imageUrl }: Props) => {
  return (
    <>
      <Link
        to={`/nutrition/foodType/${name}`}
        className="content"
        style={{ background: `url(src/${imageUrl}) 50% / cover no-repeat` }}
      >
        <p className="content__name">{name}</p>
      </Link>
    </>
  );
};

export default FoodType;
