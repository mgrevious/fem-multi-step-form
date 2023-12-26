import React, { useContext } from "react";
import { calculateTotal } from "../utils/helpers";
import { useAppSelector } from "../app/hooks";
import { AppContext } from "../context/AppContext";

const ButtonNav: React.FC = () => {
  const { currentStep, setCurrentStep, setPlanTotal } = useContext(AppContext);
  const selectedPlan = useAppSelector((state) => state.plan);
  return (
    currentStep < 5 && (
      <div
        className={`bg-white lg:bg-transparent mt-6 w-full p-4 lg:p-0 flex items-center fixed bottom-0 right-0 left-auto lg:absolute lg:mt-0 ${
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
            className="text-medium-gray text-sm lg:text-[16px] hover:text-primary"
          >
            Go Back
          </button>
        )}
        <button
          className="bg-primary hover:bg-pale-purple focus:bg-deep-purple text-white py-2 px-4 rounded-[4px]"
          onClick={() => {
            if (currentStep === 3) {
              const totalCost = calculateTotal(selectedPlan);
              setPlanTotal(totalCost);
            }

            if (currentStep > 1 && currentStep < 5) {
              setCurrentStep(currentStep + 1);
            }
          }}
        >
          {currentStep === 4 ? "Confirm" : "Next Step"}
        </button>
      </div>
    )
  );
};

export default ButtonNav;
