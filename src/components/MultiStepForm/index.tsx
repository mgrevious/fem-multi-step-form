import React, { useState } from "react";
import Steps from "../Steps";
import PersonalInfo from "../PersonalInfo";
import SelectPlan from "../../features/plan/SelectPlan";
import AddOns from "../../features/plan/AddOns";
import Finish from "../../features/plan/Finish";
import Thanks from "../Thanks";
import { signUpInfo } from "../../utils/helpers";

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      {" "}
      <div className="mx-[16px]">
        <div className="mt-10 w-full flex flex-col items-center">
          <Steps currentStep={currentStep} />
          <div className="bg-white rounded-xl py-8 px-6 mt-8 mb-32 w-full">
            {currentStep > 0 && currentStep < 5 ? (
              <header>
                <h1 className="text-2xl text-primary font-bold mb-2">
                  {signUpInfo[currentStep - 1].header}
                </h1>
              </header>
            ) : (
              ""
            )}
            <p className="text-medium-gray font-light mb-6">
              {signUpInfo[currentStep - 1].description}
            </p>
            {currentStep === 1 && <PersonalInfo />}
            {currentStep === 2 && <SelectPlan />}
            {currentStep === 3 && <AddOns />}
            {currentStep === 4 && <Finish />}
            {currentStep === 5 && <Thanks />}
          </div>
        </div>
      </div>
      <div
        className={`bg-white mt-6 w-full p-4 flex items-center fixed bottom-0 right-0 left-0 ${
          currentStep > 1 ? "justify-between" : "justify-end"
        }`}
      >
        {currentStep > 1 && currentStep < 5 && (
          <button
            onClick={() => {
              if (currentStep > 1) {
                setCurrentStep(currentStep - 1);
              }
            }}
            className="text-medium-gray text-sm"
          >
            Go Back
          </button>
        )}
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
