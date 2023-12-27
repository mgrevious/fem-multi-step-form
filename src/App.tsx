import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import MultiStepForm from "./components/MultiStepForm";
import RootLayout from "./components/RootLayout";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path={import.meta.env.DEV ? "/*" : "/fem-multi-step-form/*"}
        element={<RootLayout />}
        errorElement={<ErrorBoundary />}
      >
        <Route index element={<MultiStepForm />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
