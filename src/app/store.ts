import { configureStore } from "@reduxjs/toolkit";
import planReducer from "../features/plan/plan-slice";

export const store = configureStore({
  reducer: {
    plan: planReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
