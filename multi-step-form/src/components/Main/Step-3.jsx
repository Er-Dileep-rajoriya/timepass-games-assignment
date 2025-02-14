import React, { useState } from "react";
import "./Step-3.css";
import { useDispatch, useSelector } from "react-redux";
import { setAddOneServices, setStep } from "../../redux/pagesSlices";

const initialAddOns = [
  {
    addOnsName: "Online Service",
    addOnsDescription: "Access to multiplayer games",
    addOnsPriceMonthly: 1,
    addOnsPriceYearly: 10,
  },
  {
    addOnsName: "Larger Storage",
    addOnsDescription: "Extra 1TB of cloud save",
    addOnsPriceMonthly: 2,
    addOnsPriceYearly: 20,
  },
  {
    addOnsName: "Customization Profile",
    addOnsDescription: "Custom theme on your profile",
    addOnsPriceMonthly: 2,
    addOnsPriceYearly: 20,
  },
];

function Step_3() {
  const { serviceType, addOneServices, step } = useSelector(
    (store) => store.pageReducer
  );
  const dispatch = useDispatch();

  const [extraServices, setExtraServices] = useState(addOneServices);

  function handleChecked(e, service) {
    const updatedServices = e.target.checked
      ? [...extraServices, service] // Add service if checked
      : extraServices.filter(
          (item) => item.addOnsName !== service.addOnsName // Remove if unchecked
        );

    setExtraServices(updatedServices);
  }

  function handleSubmit() {
    dispatch(setAddOneServices(extraServices));
    dispatch(setStep(step + 1));
  }

  function handleReturnback() {
    dispatch(setStep(step - 1));
  }

  return (
    <div className="main-inner">
      <div className="main-top">
        <h2 className="ubuntu-bold">Pick Add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      {initialAddOns.map((addon, index) => {
        const isChecked = extraServices.some(
          (item) => item.addOnsName === addon.addOnsName
        );

        return (
          <div className="main-center-s3" key={index}>
            <div>
              <div className="first-box">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => handleChecked(e, addon)}
                />
              </div>
              <div className="second-box">
                <p>{addon.addOnsName}</p>
                <span>{addon.addOnsDescription}</span>
              </div>
              <div className="third-box">
                <p className="price">
                  +$
                  {serviceType === "monthly"
                    ? addon.addOnsPriceMonthly + "/mo"
                    : addon.addOnsPriceYearly + "/yr"}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="main-bottom-s2">
        <span className="back" onClick={handleReturnback}>
          Go back
        </span>
        <button className="next" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Step_3;
