import React from "react";
import imgSrc from "./cat.jpg";

import { useParams, Prompt } from "react-router-dom";

function Cat() {
  const params = useParams();

  return (
    <div>
      <Prompt when={true} message="Are you sure?" />
      <h2>A cute cat</h2>
      <h3>{params.catName || "Unkown"}</h3>

      <img src={imgSrc} alt="A cat" height="300" />
    </div>
  );
}

export default Cat;
