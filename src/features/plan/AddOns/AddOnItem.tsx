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
    <button
      id={`${name}-btn`}
      name={name}
      className={`p-4 flex items-center mb-4 border rounded-md w-full hover:border-deep-purple ${
        isChecked ? "bg-light-gray border-deep-purple" : "border-gray-300"
      }`}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(
          setAddOn({
            name: e.currentTarget.name,
            checked: !isChecked,
            header,
            amount,
          })
        );
      }}
    >
      <div className="mr-4 flex items-center">
        <input
          checked={isChecked}
          id={name}
          aria-describedby={`${name}-description`}
          name={name}
          type="checkbox"
          className="h-4 w-4 rounded border-deep-purple text-deep-purple focus:ring-deep-purple hover:cursor-pointer"
          onChange={() => {}}
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
    </button>
  );
};

export default AddOnItem;
