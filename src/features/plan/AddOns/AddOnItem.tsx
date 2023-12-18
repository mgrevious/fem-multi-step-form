import React from "react";
import { setAddOn } from "../plan-slice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

interface Props {
  description: string;
  amount: number;
  header: string;
  name: string;
}

const AddOnItem: React.FC<Props> = ({ amount, name, description, header }) => {
  const dispatch = useAppDispatch();
  const { addOns, isYearly } = useAppSelector((state) => state.plan);
  const isChecked = addOns[name].checked;
  return (
    <div
      className={`p-4 flex mb-4 border rounded-md w-full ${
        isChecked ? "bg-light-gray border-deep-purple" : "border-gray-300"
      }`}
    >
      <div className="mr-4 flex items-center">
        <input
          checked={isChecked}
          id={name}
          aria-describedby={`${name}-description`}
          name={name}
          type="checkbox"
          className="h-4 w-4 rounded border-deep-purple text-deep-purple focus:ring-deep-purple"
          onChange={(e) => {
            const addOn = e.target.name.replace(" ", "");
            dispatch(
              setAddOn({ name: addOn, checked: !isChecked, header, amount })
            );
          }}
        />
      </div>
      <div className="flex justify-between flex-1">
        <div>
          <h3 className="text-sm text-primary font-semibold text-left">
            {header}
          </h3>
          <p className="text-xs mt-1 mb-2 text-medium-gray text-left">
            {description}
          </p>
        </div>
        <div className="text-xs flex items-center">
          +${amount}
          {isYearly ? "0/yr" : "/mo"}
          {}
        </div>
      </div>
    </div>
  );
};

export default AddOnItem;
