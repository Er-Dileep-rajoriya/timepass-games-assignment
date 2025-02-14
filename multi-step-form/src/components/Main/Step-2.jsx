import React, { useInsertionEffect, useState } from "react";
import Arcade from "../../assets/images/icon-arcade.svg";
import Advanced from "../../assets/images/icon-advanced.svg";
import Pro from "../../assets/images/icon-pro.svg";
import "./Step-2.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedPlan,
  setStep,
  setServiceType,
} from "../../redux/pagesSlices";

function Step_2() {
  const { selectedPlan } = useSelector((store) => store.pageReducer);
  const { step } = useSelector((store) => store.pageReducer);
  const dispatch = useDispatch();
  const [plans, setPlans] = useState([
    {
      planName: "Arcade",
      planPriceMonthly: 9,
      planPriceYearly: 90,
      planlogo: Arcade,
    },
    {
      planName: "Advanced",
      planPriceMonthly: 12,
      planPriceYearly: 120,
      planlogo: Advanced,
    },
    {
      planName: "Pro",
      planPriceMonthly: 15,
      planPriceYearly: 150,
      planlogo: Pro,
    },
  ]);

  const { serviceType } = useSelector((store) => store.pageReducer);

  const [toggle, setToggle] = useState(false);

  // submit the page
  function handleSubmit() {
    if (selectedPlan != null) {
      dispatch(setStep(step + 1));
    }
  }

  function handleReturnBack() {
    dispatch(setStep(step - 1));
  }

  // toggling button from monthly to yearly and vise-versa
  function toggleButton() {
    setToggle(!toggle);

    if (serviceType == "monthly") {
      dispatch(setServiceType("yearly"));
    } else {
      dispatch(setServiceType("monthly"));
    }
  }

  function handleSelectPlan(currPlan) {
    if (serviceType == "monthly") {
      let localPlan = {
        planName: currPlan.planName,
        planPrice: currPlan.planPriceMonthly,
        planlogo: currPlan.planlogo,
        planType: "monthly",
      };
      dispatch(setSelectedPlan(localPlan));
    } else {
      let localPlan = {
        planName: currPlan.planName,
        planPrice: currPlan.planPriceYearly,
        planlogo: currPlan.planlogo,
        planType: "yearly",
      };
      dispatch(setSelectedPlan(localPlan));
    }
  }

  return (
    <div className="main-inner">
      <div className="main-top">
        <h2 className="ubuntu-bold">Select Your Plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="main-center-s2">
        {plans?.map((plan, index) => {
          return (
            <div
              onClick={() => handleSelectPlan(plan)}
              className={`box ${
                plan?.planName == selectedPlan?.planName ? "select-box" : ""
              }`}
              key={index}
            >
              <div className="box-top">
                <img src={plan.planlogo} alt={plan.planName} />
              </div>
              <div className="box-bottom">
                <p>{plan.planName}</p>
                <span>
                  {serviceType == "monthly"
                    ? "$" + plan.planPriceMonthly + "/mo"
                    : "$" + plan.planPriceYearly + "/yr"}
                </span>{" "}
                <br />
                <small>{serviceType == "yearly" && "2 months free"}</small>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plans-container">
        <div>
          <span>Monthly</span>
          <span
            id="switch-button"
            onClick={toggleButton}
            style={
              toggle
                ? { justifyContent: "flex-end" }
                : { justifyContent: "flex-start" }
            }
          >
            <div className="toggle"></div>
          </span>
          <span>Yearly</span>
        </div>
      </div>

      <div className="main-bottom-s2">
        <span className="back" onClick={handleReturnBack}>
          Go back
        </span>
        <button className="next" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Step_2;
