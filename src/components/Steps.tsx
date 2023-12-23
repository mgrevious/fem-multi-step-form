import React from "react";

interface Props {
  currentStep: number;
}

interface Step {
  stepNum: number;
  label: string;
}

const Steps: React.FC<Props> = ({ currentStep }) => {
  const renderSteps = () =>
    [
      { stepNum: 1, label: "your info" },
      { stepNum: 2, label: "select plan" },
      { stepNum: 3, label: "add-ons" },
      { stepNum: 4, label: "summary" },
    ].map((step: Step, index) => (
      <div className="lg:flex" key={index}>
        {" "}
        <span
          key={index}
          className={`${
            currentStep === step.stepNum
              ? "bg-[#BEE2FD] text-primary"
              : "text-white border border-white"
          } rounded-full h-8 w-8 flex items-center justify-center text-sm lg:mb-3 lg: mr-4`}
        >
          {step.stepNum}
        </span>
        <span className="hidden lg:flex lg:flex-col">
          <span className="text-light-gray text-xs mb-0.5">
            STEP {step.stepNum}
          </span>
          <span className="uppercase font-bold text-white text-sm tracking-widest">
            {step.label}
          </span>
        </span>
      </div>
    ));

  return (
    <div className="absolute -top-24 left-0 right-0 flex justify-center lg:static lg:flex-col lg:justify-normal lg:py-0 py-8">
      {" "}
      <div className="flex justify-between lg:flex-col lg:justify-normal gap-5">
        {renderSteps()}
      </div>
    </div>
  );
};

export default Steps;
