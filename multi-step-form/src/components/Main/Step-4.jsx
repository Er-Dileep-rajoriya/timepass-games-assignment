import React, { useState, useEffect } from "react";
import "./Step-4.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/pagesSlices";
import ThanksPage from "./ThanksPage";

function Step_4() {
  const { selectedPlan, addOneServices, serviceType, step } = useSelector(
    (store) => store.pageReducer
  );
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [confirmOrder, setConfirmOrder] = useState(false);

  // calculating toltal sum on mounting
  useEffect(() => {
    let sum = selectedPlan.planPrice;

    addOneServices.map((service) => {
      if (serviceType == "monthly") {
        sum += service.addOnsPriceMonthly;
      } else {
        sum += service.addOnsPriceYearly;
      }
    });

    setTotal(sum);
  }, []);

  // function to return one step back
  function handleReturnBack() {
    dispatch(setStep(step - 1));
  }

  /// function to handle change plans
  function handleChangePlan() {
    dispatch(setStep(step - 2));
  }

  // function to handle confirm order
  function handleConfirm() {
    setConfirmOrder(true);
  }

  return (
    <>
      {confirmOrder ? (
        <ThanksPage />
      ) : (
        <div className="main-inner">
          <div className="main-top">
            <h2 className="ubuntu-bold">Finishing up</h2>
            <p>Double-check everything looks OK before confirming.</p>
          </div>

          <div className="summary-card">
            <div className="summary-top">
              <div class="plan-section">
                <div>
                  <h2>
                    {selectedPlan?.planName} ({serviceType})
                  </h2>
                  <a href="#" onClick={handleChangePlan} class="change-link">
                    Change
                  </a>
                </div>
                <span class="price">
                  $
                  {serviceType == "monthly"
                    ? selectedPlan?.planPrice + "/mo"
                    : selectedPlan.planPrice + "/yr"}
                </span>
              </div>

              {addOneServices?.map((extraService, index) => {
                return (
                  <div class="addons" key={index}>
                    <p>
                      {extraService?.addOnsName}{" "}
                      <span class="addon-price">
                        +$
                        {serviceType == "monthly"
                          ? extraService?.addOnsPriceMonthly + "/mo"
                          : extraService.addOnsPriceYearly + "/yr"}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
            <div class="total">
              <span>Total (per month)</span>
              <span class="total-price">
                +${serviceType == "monthly" ? total + "/mo" : total + "/yr"}
              </span>
            </div>
          </div>

          <div className="main-bottom-s2">
            <span className="back" onClick={handleReturnBack}>
              Go back
            </span>
            <button className="next" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Step_4;
