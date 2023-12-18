import React, { useState } from "react";
import AddOnItem from "./AddOnItem";

interface Props {
  isYearly: boolean;
}

const addOns = [
  {
    name: "Online service",
    amount: 1,
    description: "Access to multiplayer games",
  },
  { name: "Larger storage", amount: 2, description: "Extra 1TB of cloud save" },
  {
    name: "Customizable profile",
    amount: 2,
    description: "Custom theme on your profile",
  },
];

const AddOns: React.FC<Props> = ({ isYearly }) => (
  <>
    <div>
      {addOns.map((plan, index) => (
        <AddOnItem
          key={index}
          isYearly={isYearly}
          amount={plan.amount}
          name={plan.name}
          description={plan.description}
        />
      ))}
    </div>
  </>
);

export default AddOns;
