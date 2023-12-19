import React, { useState } from "react";
import Steps from "../Steps";
import PersonalInfo from "../PersonalInfo";
import SelectPlan from "../../features/plan/SelectPlan";
import AddOns from "../../features/plan/AddOns";
import Finish from "../../features/plan/Finish";
import Thanks from "../Thanks";
import { calculateTotal, signUpInfo } from "../../utils/helpers";
import { useAppSelector } from "../../app/hooks";

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [planTotal, setPlanTotal] = useState(0);
  const selectedPlan = useAppSelector((state) => state.plan);
  return (
    <>
      {" "}
      <div className="mx-[16px]">
        <div className="mt-16 w-full flex flex-col items-center">
          <div className="lg:container bg-white rounded-xl py-8 px-6 mt-8 mb-32 w-full relative lg:grid lg:grid-cols-3 lg:gap-4">
            <div className="bg-sidebar-desktop lg:py-10 lg:px-8">
              <Steps currentStep={currentStep} />
            </div>
            <div className="col-span-2">
              <div className="lg:pr-20">
                {" "}
                {currentStep > 0 && currentStep < 5 ? (
                  <header>
                    <h1 className="text-2xl text-primary font-bold mb-2 lg:mt-8">
                      {signUpInfo[currentStep - 1].header}
                    </h1>
                  </header>
                ) : (
                  ""
                )}
                {signUpInfo[currentStep - 1] && (
                  <p className="text-medium-gray font-light mb-6 lg:mb-10">
                    {signUpInfo[currentStep - 1].description}
                  </p>
                )}
                {currentStep === 1 && <PersonalInfo />}
                {currentStep === 2 && <SelectPlan />}
                {currentStep === 3 && <AddOns />}
                {currentStep === 4 && <Finish planTotal={planTotal} />}
                {currentStep === 5 && <Thanks />}
                {currentStep < 5 && (
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
                        if (currentStep === 3) {
                          const totalCost = calculateTotal(selectedPlan);
                          setPlanTotal(totalCost);
                        }
                      }}
                    >
                      Next Step
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
