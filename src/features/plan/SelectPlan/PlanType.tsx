import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { PlanName, selectPlan } from "../plan-slice";

interface Props {
  icon: string;
  amount: number;
  name: string;
  isYearly: boolean;
}

const PlanType: React.FC<Props> = ({ amount, name, icon, isYearly }) => {
  const dispatch = useAppDispatch();
  const selectedPlan = useAppSelector((state) => state.plan);
  return (
    <button
      onClick={(e: React.MouseEvent) => {
        if (e.target) {
          const target = e.target as HTMLButtonElement;
          dispatch(selectPlan(target.name as PlanName));
        }
      }}
      name={name}
      className={`p-4 flex mb-4 border rounded-md w-full ${
        selectedPlan.name === name
          ? "bg-light-gray border-deep-purple"
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
};

export default PlanType;
