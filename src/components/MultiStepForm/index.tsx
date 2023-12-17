import React, { useState } from "react";
import Steps from "./Steps";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Finish from "./Finish";
import Thanks from "./Thanks";

const signUpInfo = [
  {
    header: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    header: "Select Your Plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    header: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    header: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValid, setFormValid] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      {" "}
      <div className="mx-[16px]">
        <div className="mt-8 w-full flex flex-col items-center">
          <Steps currentStep={currentStep} />
          <div className="bg-white rounded-xl py-8 px-6 mt-8 w-full">
            {currentStep > 0 && currentStep < 5 ? (
              <header>
                <h1 className="text-2xl text-primary font-bold mb-2">
                  {signUpInfo[currentStep - 1].header}
                </h1>
              </header>
            ) : (
              ""
            )}
            <p className="text-light-gray font-light mb-4">
              {signUpInfo[currentStep - 1].description}
            </p>
            {currentStep === 1 && <PersonalInfo />}
            {currentStep === 2 && (
              <SelectPlan
                setIsYearly={() => {
                  setIsYearly(!isYearly);
                }}
                isYearly={isYearly}
              />
            )}
            {currentStep === 3 && <AddOns isYearly={isYearly} />}
            {currentStep === 4 && <Finish isYearly={isYearly} />}
            {currentStep === 5 && <Thanks />}
          </div>
        </div>
      </div>
      <div className="bg-white mt-6 w-full p-4 flex items-center justify-between">
        <button
          onClick={() => {
            if (currentStep > 1) {
              setCurrentStep(currentStep - 1);
            }
          }}
          className="text-light-gray text-sm"
        >
          Go Back
        </button>
        <button
          className="bg-primary text-white py-2 px-4 rounded-[4px]"
          onClick={() => {
            if (currentStep < 5) {
              setCurrentStep(currentStep + 1);
            }
          }}
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default MultiStepForm;
