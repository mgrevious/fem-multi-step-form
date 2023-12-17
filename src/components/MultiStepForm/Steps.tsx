import React from "react";

interface Props {
  currentStep: number;
}

const Steps: React.FC<Props> = ({ currentStep }) => {
  const renderSteps = () =>
    [1, 2, 3, 4].map((num, index) => (
      <span
        key={index}
        className={`${
          currentStep === num
            ? "bg-[#BEE2FD] text-primary"
            : "text-white border border-white"
        } rounded-full h-10 w-10 text-lg flex items-center justify-center`}
      >
        {num}
      </span>
    ));

  return <div className="flex content-between gap-5">{renderSteps()}</div>;
};

export default Steps;
