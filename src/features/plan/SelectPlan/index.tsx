import React from "react";
import { Switch } from "@headlessui/react";
import PlanType from "./PlanType";
import { classNames } from "../../../utils/helpers";
import ArcadeSvg from "../../../assets/images/icon-arcade.svg";
import AdvancedSvg from "../../../assets/images/icon-advanced.svg";
import ProSvg from "../../../assets/images/icon-pro.svg";
import { useAppSelector } from "../../../app/hooks";

const plans = [
  { name: "Arcade", amount: 9, icon: ArcadeSvg },
  { name: "Advanced", amount: 12, icon: AdvancedSvg },
  { name: "Pro", amount: 15, icon: ProSvg },
];

const SelectPlan: React.FC = () => {
  const isYearly = useAppSelector((state) => state.plan.isYearly);
  return (
    <>
      <div>
        {plans.map((plan, index) => (
          <PlanType
            key={index}
            isYearly={isYearly}
            amount={plan.amount}
            name={plan.name}
            icon={plan.icon}
          />
        ))}
      </div>
      <div className="mt-8 bg-light-gray rounded-md p-4 flex">
        <div className="flex-1 flex justify-center text-sm text-primary font-[500]">
          Monthly
        </div>
        <div className="flex-1 flex justify-center">
          {" "}
          <Switch
            checked={isYearly}
            onChange={setIsYearly}
            className={classNames(
              !isYearly ? "bg-primary" : "bg-gray-200",
              "relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                isYearly ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-3 w-3 mt-[2px] ml-[2px] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
        </div>
        <div className="flex-1 flex justify-center text-sm text-medium-gray">
          Yearly
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
