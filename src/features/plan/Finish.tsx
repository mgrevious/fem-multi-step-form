import React from "react";
import { useAppSelector } from "../../app/hooks";

const Finish: React.FC = () => {
  const { name, addOns, isYearly } = useAppSelector((state) => state.plan);
  return (
    <div className="flex flex-col p-2 rounded-md">
      <div className="flex items-center justify-between border-b border-medium-gray pb-2 text-primary">
        <div>
          {name} {isYearly ? "Yearly" : "Monthly"}
        </div>
        <div>$9/{isYearly ? "yr" : "mo"}</div>
      </div>
      {Object.entries(addOns)
        .filter(([, { checked }]) => checked)
        .map(([, { header }]) => (
          <>
            <div className="flex items-center justify-between">
              <span>{header}</span>
              <span>+1/{isYearly ? "yr" : "mo"}</span>
            </div>
          </>
        ))}

      <div className="flex items-center justify-between">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Finish;
