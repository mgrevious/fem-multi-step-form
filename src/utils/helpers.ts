import ArcadeSvg from "../assets/images/icon-arcade.svg";
import AdvancedSvg from "../assets/images/icon-advanced.svg";
import ProSvg from "../assets/images/icon-pro.svg";
import { Plan, PlanName } from "../features/plan/plan-slice";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const signUpInfo = [
  {
    header: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    header: "Select Your Plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    header: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    header: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

export const plans = [
  { name: "Arcade", amount: 9, icon: ArcadeSvg },
  { name: "Advanced", amount: 12, icon: AdvancedSvg },
  { name: "Pro", amount: 15, icon: ProSvg },
];

export const addOns = [
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

export const getPlanPrice = (name: PlanName) => {
  const plan = plans.find((plan) => plan.name === name);
  return plan?.amount || 0;
};

export const calculateTotal = (selectedPlan: Plan) => {
  const { amount, isYearly, addOns } = selectedPlan;
  const addOnTotal = Object.entries(addOns)
    .filter(([, { checked }]) => checked)
    .reduce((prevVal, [, { amount }]) => {
      return (prevVal += amount);
    }, 0);
  return (isYearly ? amount * 10 : amount) + addOnTotal;
};

export const updateAddOns = (state: Plan, name: string, amount: number) => {
  if (state.isYearly) {
    if (amount < 10) {
      state.addOns[name].amount = amount * 10;
    }
  } else if (amount > 9) {
    state.addOns[name].amount = amount % 10 === 0 ? amount / 10 : amount % 10;
  }
};
