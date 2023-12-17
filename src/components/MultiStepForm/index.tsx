import React, { useState } from "react";
import Steps from "./Steps";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Finish from "./Finish";
import Thanks from "./Thanks";

type StepRange = 1 | 2 | 3 | 4 | 5;

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
  const [currentStep, setCurrentStep] = useState<StepRange>(1);
  const [formValid, setFormValid] = useState(false);

  return (
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
        {currentStep === 2 && <SelectPlan />}
        {currentStep === 3 && <AddOns />}
        {currentStep === 4 && <Finish />}
        {currentStep === 5 && <Thanks />}
      </div>
      <div className="bg-white fixed bottom-0 left-0 right-0 p-4 flex items-center justify-end">
        <button className="bg-primary text-white p-4 rounded-md">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
