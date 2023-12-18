import React from "react";

interface Props {
  icon: string;
  amount: number;
  name: string;
  isYearly: boolean;
  selected: string;
  setSelected: (name: string) => void;
}

const PlanType: React.FC<Props> = ({
  selected,
  amount,
  name,
  icon,
  isYearly,
  setSelected,
}) => (
  <button
    onClick={(e: React.MouseEvent) => {
      if (e.target) {
        const target = e.target as HTMLButtonElement;
        setSelected(target.name);
      }
    }}
    name={name.toLowerCase()}
    className={`p-4 flex mb-4 border rounded-md w-full ${
      selected === name.toLowerCase()
        ? "bg-light-gray border-[#483EFF]"
        : "border-gray-300"
    }`}
  >
    <div className="mr-4 flex flex-col justify-start">
      <img src={icon} alt={`${name} icon`} />
    </div>
    <div>
      <h3 className="text-primary font-semibold text-left">{name}</h3>
      <p className="text-sm mt-1 mb-2 text-medium-gray text-left">
        ${amount}
        {isYearly ? "0/yr" : "/mo"}
      </p>
      {isYearly && <p className="text-xs">2 months free</p>}
    </div>
  </button>
);

export default PlanType;
