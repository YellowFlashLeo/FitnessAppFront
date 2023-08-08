import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  imageUrl: string;
}

const Muscle = ({ name, imageUrl }: Props) => {
  return (
    <>
      <div
        className="content"
        style={{ background: `url(src/${imageUrl}) 50% / cover no-repeat` }}
      >
        <p className="content__name">{name}</p>
        <Link to={`/bodyParts/bodyPart/${name}`} className="content__link">
          Record
        </Link>
      </div>
    </>
  );
};

export default Muscle;
