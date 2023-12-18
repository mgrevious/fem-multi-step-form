import React from "react";
import AddOnItem from "./AddOnItem";

const addOns = [
  {
    name: "onlineService",
    header: "Online service",
    amount: 1,
    description: "Access to multiplayer games",
  },
  {
    name: "largerStorage",
    header: "Larger storage",
    amount: 2,
    description: "Extra 1TB of cloud save",
  },
  {
    name: "customizableProfile",
    header: "Customizable profile",
    amount: 2,
    description: "Custom theme on your profile",
  },
];

const AddOns: React.FC = () => (
  <>
    <div>
      {addOns.map((plan, index) => (
        <AddOnItem
          key={index}
          amount={plan.amount}
          name={plan.name}
          header={plan.header}
          description={plan.description}
        />
      ))}
    </div>
  </>
);

export default AddOns;
