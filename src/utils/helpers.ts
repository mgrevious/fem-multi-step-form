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
