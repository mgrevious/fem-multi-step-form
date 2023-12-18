import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PlanName = "Arcade" | "Advanced" | "Pro";

export interface AddOn {
  [index: string]: { checked: boolean; header: string };
}

const initialState: {
  name: PlanName;
  isYearly: boolean;
  addOns: AddOn;
} = {
  name: "Arcade",
  isYearly: false,
  addOns: {
    onlineService: { checked: false, header: "Online Service" },
    largerStorage: { checked: false, header: "Larger Storage" },
    customizableProfile: { checked: false, header: "Customizable Profile" },
  },
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    selectPlan(state, action: PayloadAction<PlanName>) {
      state.name = action.payload;
    },
    setAddOn(
      state,
      action: PayloadAction<{ name: string; checked: boolean; header: string }>
    ) {
      const { name, checked, header } = action.payload;
      state.addOns[name].checked = checked;
      state.addOns[name].header = header;
    },
    toggleYearly(state) {
      state.isYearly = !state.isYearly;
    },
  },
});

export default planSlice.reducer;

export const { selectPlan, setAddOn, toggleYearly } = planSlice.actions;
