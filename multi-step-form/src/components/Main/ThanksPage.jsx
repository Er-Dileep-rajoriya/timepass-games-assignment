import "./ThanksPage.css";
import React from "react";
import thanksImage from "../../assets/images/icon-thank-you.svg";

function ThanksPage() {
  return (
    <div className="main-inner-thank">
      <div className="thanks-page">
        <img src={thanksImage} alt="logo" height={50} />
        <h3>Thank You!</h3>
        <span>
          Thanks for confirming your subscription! we hope you have fun using
          our plateform. if you ever need support,please feel free to mail us at
          support@loremgamming.com.
        </span>
      </div>
    </div>
  );
}

export default ThanksPage;
