import React from "react";
import AddOnItem from "./AddOnItem";
import { addOns } from "../../../utils/helpers";
import ButtonNav from "../ButtonNav";

const AddOns: React.FC = () => (
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
    <ButtonNav />
  </div>
);

export default AddOns;
