import React from "react";

interface Props {
  icon: string;
  amount: number;
  name: string;
  isYearly: boolean;
}

const PlanType: React.FC<Props> = ({ amount, name, icon, isYearly }) => {
  console.log("name: ", name);
  return (
    <div className="p-4 flex mb-4 border border-gray-300 rounded-md">
      <div className="mr-4 flex flex-col justify-start">
        <img src={icon} alt={`${name} icon`} />
      </div>
      <div>
        <h3 className="font-bold text-primary">{name}</h3>
        <p className="text-sm mt-1 mb-2 text-light-gray">
          ${amount}
          {isYearly ? 0 : ""}/{isYearly ? "yr" : "mo"}
        </p>
        {isYearly && <p className="text-xs">2 months free</p>}
      </div>
    </div>
  );
};

export default PlanType;
