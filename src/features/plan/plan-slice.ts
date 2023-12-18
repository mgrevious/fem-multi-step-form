import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getPlanPrice, updateAddOns } from "../../utils/helpers";

export type PlanName = "Arcade" | "Advanced" | "Pro";

export interface AddOn {
  [index: string]: { checked: boolean; header: string; amount: number };
}

export interface Plan {
  name: PlanName;
  addOns: AddOn;
  amount: number;
  isYearly: boolean;
}

const initialState: Plan = {
  name: "Arcade",
  isYearly: false,
  amount: 9,
  addOns: {
    onlineService: { checked: false, header: "Online Service", amount: 1 },
    largerStorage: { checked: false, header: "Larger Storage", amount: 2 },
    customizableProfile: {
      checked: false,
      header: "Customizable Profile",
      amount: 2,
    },
  },
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    selectPlan(state, action: PayloadAction<PlanName>) {
      state.name = action.payload;
      state.amount = getPlanPrice(action.payload);
    },
    setAddOn(
      state,
      action: PayloadAction<{
        name: string;
        checked: boolean;
        header: string;
        amount: number;
      }>
    ) {
      const { name, checked, header, amount } = action.payload;
      state.addOns[name].checked = checked;
      state.addOns[name].header = header;
      // change to yearly if addOn amount is < 10 and isYearly, amount * 10
      // else if !isYearly and addOn amount > 9, amount % 10
      updateAddOns(state, name, amount);
    },
    toggleYearly(state) {
      state.isYearly = !state.isYearly;
      // change to yearly if addOn amount is < 10 and isYearly, amount * 10
      // else if !isYearly and addOn amount > 9, amount % 10
      Object.entries(state.addOns).forEach(([name, { amount }]) => {
        updateAddOns(state, name, amount);
      });
    },
  },
});

export default planSlice.reducer;

export const { selectPlan, setAddOn, toggleYearly } = planSlice.actions;
