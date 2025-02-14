import "./Main.css";
import React from "react";
import Step_1 from "./Step-1";
import Step_2 from "./Step-2";
import Step_3 from "./Step-3";
import Step_4 from "./Step-4";
import { useSelector } from "react-redux";

function Main() {
  const { step } = useSelector((store) => store.pageReducer);

  return (
    <div className="main">
      {step == 1 && <Step_1 />}
      {step == 2 && <Step_2 />}
      {step == 3 && <Step_3 />}
      {step == 4 && <Step_4 />}
    </div>
  );
}

export default Main;
