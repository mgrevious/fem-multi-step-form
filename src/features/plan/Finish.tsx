import React from "react";
import { useAppSelector } from "../../app/hooks";

interface Props {
  planTotal: number;
}

const Finish: React.FC<Props> = ({ planTotal }) => {
  const { name, addOns, isYearly, amount } = useAppSelector(
    (state) => state.plan
  );

  return (
    <>
      <div className="flex flex-col p-4 rounded-md mb-4 bg-light-gray">
        <div className="flex items-center justify-between border-b border-medium-gray mb-4">
          <div className="flex flex-col items-start mb-3">
            <span className="text-primary">
              {" "}
              {name} {isYearly ? "Yearly" : "Monthly"}
            </span>
            <button className="underline text-medium-gray">Change</button>
          </div>
          <div className="text-primary">
            ${isYearly ? `${amount * 10}/yr` : `${amount}/mo`}
          </div>
        </div>
        {Object.entries(addOns)
          .filter(([, { checked }]) => checked)
          .map(([, { header, amount }], index) => (
            <div
              key={index}
              className="flex items-center justify-between text-medium-gray mb-2"
            >
              <span>{header}</span>
              <span className="text-primary">
                +{amount}/{isYearly ? "yr" : "mo"}
              </span>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-between px-4">
        <span>Total (per {isYearly ? "year" : "month"})</span>
        <span className="text-deep-purple font-semibold">
          +{planTotal}/{isYearly ? "yr" : "mo"}
        </span>
      </div>
    </>
  );
};

export default Finish;
