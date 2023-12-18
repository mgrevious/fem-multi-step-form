import React, { useState } from "react";

interface Props {
  description: string;
  amount: number;
  name: string;
  isYearly: boolean;
}

const AddOnItem: React.FC<Props> = ({
  amount,
  name,
  description,
  isYearly,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`p-4 flex mb-4 border rounded-md w-full ${
        isChecked ? "bg-light-gray border-[#483EFF]" : "border-gray-300"
      }`}
    >
      <div className="mr-4 flex items-center">
        <input
          checked={isChecked}
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-[#483EFF] text-[#483EFF] focus:ring-[#483EFF]"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </div>
      <div className="flex justify-between flex-1">
        <div>
          <h3 className="text-sm text-primary font-semibold text-left">
            {name}
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
