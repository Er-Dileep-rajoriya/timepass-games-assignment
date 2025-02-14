import "./Step-1.css";
import React, { useState } from "react";
import { setPersonalInfo, setStep } from "../../redux/pagesSlices";
import { useDispatch, useSelector } from "react-redux";

function Step_1() {
  const { step } = useSelector((store) => store.pageReducer);
  const { personalInfo } = useSelector((store) => store.pageReducer);

  const [input, setInput] = useState({
    name: personalInfo?.name || "",
    email: personalInfo?.email || "",
    phoneNumber: personalInfo?.phoneNumber || "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
  });

  const dispatch = useDispatch();

  const changeEventHandlers = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

    setErrors({
      nameError: "",
      emailError: "",
      phoneError: "",
    });
  };

  // function to validate email using regular expression
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  /// handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // check for validations
    if (input.name.trim() == "" || !input.name) {
      setErrors({ ...errors, nameError: "Name is required." });
      return;
    }

    if (input.email.trim() == "" || !input.email) {
      setErrors({ ...errors, emailError: "Email is required." });
      return;
    }

    if (!isValidEmail(input.email)) {
      setErrors({ ...errors, emailError: "Invalid Email." });
      return;
    }

    if (input.phoneNumber.trim() == "" || !input.phoneNumber) {
      setErrors({ ...errors, phoneError: "Phone Number is required." });
      return;
    }

    if (input.phoneNumber.length < 10 || !Number(input.phoneNumber)) {
      setErrors({ ...errors, phoneError: "Invalid Phone Number." });
      return;
    }

    // dispating action
    dispatch(setPersonalInfo(input));
    dispatch(setStep(step + 1));

    console.log(input);
  };

  return (
    <form className="main-inner" onSubmit={handleSubmit}>
      <div className="main-inner responsive">
        <div className="main-top">
          <h2 className="ubuntu-bold">Personal info</h2>
          <p>Please provide your name, email, address, and phone number.</p>
        </div>

        <div className="main-center">
          <div>
            <div className="label-parent">
              <label htmlFor="name">Name</label>
              <span className="error">{errors?.nameError}</span>
            </div>
            <input
              style={
                errors.nameError.length > 0 ? { border: "2px solid red" } : {}
              }
              value={input.name}
              onChange={changeEventHandlers}
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
            />
          </div>

          <div>
            <div className="label-parent">
              <label htmlFor="email">Email Address</label>
              <span className="error">{errors?.emailError}</span>
            </div>

            <input
              style={
                errors.emailError.length > 0 ? { border: "2px solid red" } : {}
              }
              value={input.email}
              onChange={changeEventHandlers}
              name="email"
              type="email"
              id="email"
              placeholder="e.g. stephenking@gmail.com"
            />
          </div>

          <div>
            <div className="label-parent">
              <label htmlFor="phone">Phone Number</label>
              <span className="error">{errors?.phoneError}</span>
            </div>

            <input
              style={
                errors.phoneError.length > 0 ? { border: "2px solid red" } : {}
              }
              value={input.phoneNumber}
              onChange={changeEventHandlers}
              name="phoneNumber"
              type="text"
              id="phone"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </div>
      </div>

      <div className="main-bottom">
        <button type="submit">Next Step</button>
      </div>
    </form>
  );
}

export default Step_1;
