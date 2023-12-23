import React from "react";

interface ContextState {
  currentStep: number;
  planTotal: number;
  setCurrentStep: (step: number) => void;
  setPlanTotal: (planTotal: number) => void;
}

export const AppContext = React.createContext<ContextState>({
  currentStep: 1,
  planTotal: 0,
  setCurrentStep() {},
  setPlanTotal() {},
});

interface ProviderProps {
  children: React.ReactNode;
  value: ContextState;
}

const AppProvider: React.FC<ProviderProps> = ({ children, value }) => (
  <AppContext.Provider value={value}>{children}</AppContext.Provider>
);

export default AppProvider;
