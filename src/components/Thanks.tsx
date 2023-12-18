import React from "react";
import ThanksSvg from "../assets/images/icon-thank-you.svg";

const Thanks: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="mb-5 flex justify-center">
        <img src={ThanksSvg} alt="Thank You icon text-center" />
      </div>
      <h2 className="text-2xl mb-2 text-center font-bold">Thank You!</h2>
      <p className="text-center text-medium-gray">
        {" "}
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Thanks;
