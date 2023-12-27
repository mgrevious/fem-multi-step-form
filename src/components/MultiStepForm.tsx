import React, { useState } from "react";
import Steps from "./Steps";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "../features/plan/SelectPlan";
import AddOns from "../features/plan/AddOns";
import Finish from "../features/plan/Finish";
import Thanks from "./Thanks";
import AppProvider from "../context/AppContext";
import { signUpInfo } from "../utils/helpers";

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [planTotal, setPlanTotal] = useState(0);

  return (
    <AppProvider
      value={{
        currentStep,
        planTotal,
        setCurrentStep(step: number) {
          setCurrentStep(step);
        },
        setPlanTotal(total: number) {
          setPlanTotal(total);
        },
      }}
    >
      <div className="mx-[16px]">
        <div className="mt-24 lg:mt-16 lg:w-3/4 mx-auto">
          <div className="lg:container bg-white rounded-xl py-8 px-6 lg:px-0 mt-8 mb-32 w-full lg:h-[600px] lg:flex">
            <div className="bg-sidebar-desktop lg:py-10 lg:px-8 lg:ml-5 lg:flex-initial lg:min-w-[260px]">
              <Steps currentStep={currentStep} />
            </div>
            <div className="lg:flex lg:justify-center lg:flex-auto">
              <div className="lg:h-[540px] lg:relative lg:w-full sm:mx-8 lg:mx-10">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default MultiStepForm;
